import type { RPCMethods } from './rpc.types';
import { Wallet } from './wallet';
/**
 * PocketNetProxy is a class responsible for managing and interacting with the PocketNet
 * kit, providing a way to call various RPC methods defined in the `RPCMethodMap`.
 *
 * The class provides an `init` method for initializing the kit, and it dynamically binds all RPC methods
 * to the `rpc` property for convenient usage.
 */
declare class PocketNetProxyApi {
    /**
     * Indicates whether the PocketNet kit has been initialized.
     *
     * @private
     * @type {boolean}
     */
    private kitInitialized;
    /**
     * Instance of the Wallet class for managing wallet operations.
     *
     * Provides functionality to:
     * - Send funds from an address using a private key.
     * - Retrieve the balance and unspent outputs of an address using a private key.
     */
    wallet: Wallet;
    /**
     * Object containing all RPC methods as properties.
     * Each method corresponds to a key in `RPCMethodMap`.
     *
     * @public
     * @type {RPCMethods}
     */
    rpc: RPCMethods;
    /**
     * Creates an instance of PocketNetProxy and initializes RPC methods.
     *
     * @constructor
     */
    constructor();
    /**
     * Initializes all RPC methods and assigns them to the `rpc` object.
     *
     * This method iterates over the list of available RPC methods defined in `availableRPCMethods`
     * and assigns a function handler to each method name on the `rpc` object. This allows you to
     * call `rpc` methods like `rpc.getapps()` or `rpc.getuserprofile()` dynamically.
     *
     * @private
     */
    private initRPCMethods;
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
    private createRPCMethod;
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
    private callRPCMethod;
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
    private init;
    ensureInitialized(): void;
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
    static create(): Promise<PocketNetProxyApi>;
}
export default PocketNetProxyApi;
//# sourceMappingURL=pocketnet-proxy-api.d.ts.map