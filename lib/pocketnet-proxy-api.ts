import type { OptionalRPCParams, RPCMethodMap, RPCMethods } from './rpc.types'
import kit from 'pocketnet-proxy/src/kit.js'
import { availableRPCMethods } from './rpc.constants'
import { Wallet } from './wallet'

global.MIN_NODES_COUNT = 10
global.WRITE_LOGS = true
global.USE_TRUST_NODES_ONLY = false
global.REVERSE_PROXY = true
global.USE_TLS_NODES_ONLY = false

/**
 * PocketNetProxy is a class responsible for managing and interacting with the PocketNet
 * kit, providing a way to call various RPC methods defined in the `RPCMethodMap`.
 *
 * The class provides an `init` method for initializing the kit, and it dynamically binds all RPC methods
 * to the `rpc` property for convenient usage.
 */
class PocketNetProxyApi {
  /**
   * Indicates whether the PocketNet kit has been initialized.
   *
   * @private
   * @type {boolean}
   */
  private kitInitialized: boolean = false

  /**
   * Instance of the Wallet class for managing wallet operations.
   *
   * Provides functionality to:
   * - Send funds from an address using a private key.
   * - Retrieve the balance and unspent outputs of an address using a private key.
   */
  wallet: Wallet = new Wallet(this)
  proxy: Awaited<ReturnType<typeof kit.proxy>> | null = null

  /**
   * Object containing all RPC methods as properties.
   * Each method corresponds to a key in `RPCMethodMap`.
   *
   * @public
   * @type {RPCMethods}
   */
  public rpc: RPCMethods = {} as RPCMethods

  /**
   * Creates an instance of PocketNetProxy and initializes RPC methods.
   *
   * @constructor
   */
  constructor() {
    this.initRPCMethods()
  }

  /**
   * Initializes all RPC methods and assigns them to the `rpc` object.
   *
   * This method iterates over the list of available RPC methods defined in `availableRPCMethods`
   * and assigns a function handler to each method name on the `rpc` object. This allows you to
   * call `rpc` methods like `rpc.getapps()` or `rpc.getuserprofile()` dynamically.
   *
   * @private
   */
  private initRPCMethods() {
    availableRPCMethods.forEach((method) => {
      /**
       * Calls the `{method}` RPC method.
       *
       * This is a dynamically generated method for the RPC call `{method}`.
       * It will invoke the corresponding RPC action with the specified parameters.
       *
       * @param {OptionalRPCParams<RPCMethodMap[typeof method]>} [params] - Parameters for the method.
       * @returns {Promise<any>} A promise that resolves to the result of the RPC method call.
       */
      (this.rpc as any)[method] = this.createRPCMethod(method)
    })
  }

  /**
   * Creates an RPC method handler for the given method.
   *
   * This function returns an async function that can be called with the necessary parameters
   * for the specified RPC method. The method is dynamically created based on the given `method` name.
   *
   * @template T - The key of the method in `RPCMethodMap`.
   * @param {T} method - The name of the RPC method.
   * @returns {(params?: OptionalRPCParams<RPCMethodMap[T]>) => Promise<any>} A function that calls the specified RPC method.
   * @private
   */
  private createRPCMethod<T extends keyof RPCMethodMap>(method: T) {
    return async (params?: OptionalRPCParams<RPCMethodMap[T]>) => {
      return this.callRPCMethod(method, params)
    }
  }

  /**
   * Calls the specified RPC method with the provided parameters.
   *
   * Ensures that the PocketNet kit has been initialized before calling the method.
   * If the kit has not been initialized, an error will be thrown.
   *
   * @template T - The key of the method in `RPCMethodMap`.
   * @param {T} method - The name of the RPC method to be called.
   * @param {OptionalRPCParams<RPCMethodMap[T]>} [params] - The parameters to pass to the method.
   * @returns {Promise<any>} The result of the RPC method execution.
   * @throws {Error} If the PocketNet kit is not initialized before calling the method.
   *
   * @private
   */
  private async callRPCMethod<T extends keyof RPCMethodMap>(
    method: T,
    params?: OptionalRPCParams<RPCMethodMap[T]>,
  ): Promise<any> {
    this.ensureInitialized()

    return this.proxy?.api.node.rpc.action({
      method,
      parameters: typeof params === 'object' ? Object.values(params) : params,
    })
  }

  /**
   * Initializes the PocketNetProxy instance.
   *
   * This method sets up the required configurations and initializes the necessary dependencies
   * for the PocketNetProxy instance to function properly. It ensures that the kit is started
   * with the required modules, such as 'nodeManager' and 'cache'.
   *
   * @async
   * @returns {Promise<void>} A promise that resolves when the kit is successfully initialized.
   * @throws {Error} Will throw an error if the kit fails to initialize or any of the required
   * modules cannot be imported.
   *
   * @example
   * const proxy = new PocketNetProxy();
   * proxy.init()
   *   .then(() => {
   *     console.log('Kit initialized successfully');
   *   })
   *   .catch((error) => {
   *     console.error('Failed to initialize kit', error);
   *   });
   */
  private async init(): Promise<typeof this.proxy> {
    try {
      // Dynamically import the required module
      await import('pocketnet-proxy/src/lib/btc16.js')

      // Start the kit with the specified list of modules
      await kit.start({ list: ['nodeManager', 'cache'] })
      this.proxy = await kit.proxy()
      // Mark the kit as initialized
      this.kitInitialized = true
      return this.proxy
    }
    catch (e) {
      console.error(e, 'ERROR - initKit')
      // Throw a new error if initialization fails
      throw new Error('Failed to initialize kit')
    }
  }

  ensureInitialized() {
    if (!this.kitInitialized || !this.proxy) {
      throw new Error('Kit is not initialized. Call init() first.')
    }
  }

  /**
   * Creates and initializes an instance of the PocketNetProxyApi class.
   *
   * This static method allows you to create a new instance of PocketNetProxyApi
   * and ensures that it is fully initialized before use. It calls the `init()`
   * method internally to set up the necessary configurations and dependencies.
   *
   * @async
   * @static
   * @returns {Promise<PocketNetProxyApi>} A promise that resolves to an initialized
   * instance of the PocketNetProxyApi class, ready for use.
   *
   * @example
   * PocketNetProxyApi.create()
   *   .then((proxy) => {
   *     proxy.rpc.getuserprofile({ address: 'userAddress', shortForm: 'yes' })
   *       .then(response => console.log('User Profile:', response))
   *       .catch(error => console.error('Failed to fetch user profile:', error));
   *   })
   *   .catch(error => {
   *     console.error('Failed to initialize PocketNet Proxy:', error);
   *   });
   */
  static async create(): Promise<PocketNetProxyApi> {
    const instance = new PocketNetProxyApi()
    const proxy = await instance.init()
    await proxy?.nodeManager.waitreadywithrating()
    return instance
  }
}

export default PocketNetProxyApi
