"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kit_js_1 = __importDefault(require("pocketnet-proxy/src/kit.js"));
const rpc_constants_1 = require("./rpc.constants");
const wallet_1 = require("./wallet");
global.MIN_NODES_COUNT = 10;
global.WRITE_LOGS = true;
global.USE_TRUST_NODES_ONLY = false;
global.REVERSE_PROXY = true;
global.USE_TLS_NODES_ONLY = false;
/**
 * PocketNetProxy is a class responsible for managing and interacting with the PocketNet
 * kit, providing a way to call various RPC methods defined in the `RPCMethodMap`.
 *
 * The class provides an `init` method for initializing the kit, and it dynamically binds all RPC methods
 * to the `rpc` property for convenient usage.
 */
class PocketNetProxyApi {
    /**
     * Creates an instance of PocketNetProxy and initializes RPC methods.
     *
     * @constructor
     */
    constructor() {
        /**
         * Indicates whether the PocketNet kit has been initialized.
         *
         * @private
         * @type {boolean}
         */
        this.kitInitialized = false;
        /**
         * Instance of the Wallet class for managing wallet operations.
         *
         * Provides functionality to:
         * - Send funds from an address using a private key.
         * - Retrieve the balance and unspent outputs of an address using a private key.
         */
        this.wallet = new wallet_1.Wallet(this);
        this.proxy = null;
        /**
         * Object containing all RPC methods as properties.
         * Each method corresponds to a key in `RPCMethodMap`.
         *
         * @public
         * @type {RPCMethods}
         */
        this.rpc = {};
        this.initRPCMethods();
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
    initRPCMethods() {
        rpc_constants_1.availableRPCMethods.forEach((method) => {
            /**
             * Calls the `{method}` RPC method.
             *
             * This is a dynamically generated method for the RPC call `{method}`.
             * It will invoke the corresponding RPC action with the specified parameters.
             *
             * @param {OptionalRPCParams<RPCMethodMap[typeof method]>} [params] - Parameters for the method.
             * @returns {Promise<any>} A promise that resolves to the result of the RPC method call.
             */
            this.rpc[method] = this.createRPCMethod(method);
        });
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
    createRPCMethod(method) {
        return async (params) => {
            return this.callRPCMethod(method, params);
        };
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
    async callRPCMethod(method, params) {
        var _a;
        this.ensureInitialized();
        return (_a = this.proxy) === null || _a === void 0 ? void 0 : _a.api.node.rpc.action({
            method,
            parameters: params,
        });
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
    async init() {
        try {
            // Dynamically import the required module
            await Promise.resolve().then(() => __importStar(require('pocketnet-proxy/src/lib/btc16.js')));
            // Start the kit with the specified list of modules
            await kit_js_1.default.start({ list: ['nodeManager', 'cache'] });
            this.proxy = await kit_js_1.default.proxy();
            // Mark the kit as initialized
            this.kitInitialized = true;
            return this.proxy;
        }
        catch (e) {
            console.error(e, 'ERROR - initKit');
            // Throw a new error if initialization fails
            throw new Error('Failed to initialize kit');
        }
    }
    ensureInitialized() {
        if (!this.kitInitialized || !this.proxy) {
            throw new Error('Kit is not initialized. Call init() first.');
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
    static async create() {
        const instance = new PocketNetProxyApi();
        const proxy = await instance.init();
        await (proxy === null || proxy === void 0 ? void 0 : proxy.nodeManager.waitreadywithrating());
        return instance;
    }
}
exports.default = PocketNetProxyApi;
