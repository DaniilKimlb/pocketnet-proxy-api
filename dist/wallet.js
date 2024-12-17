"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const kit_js_1 = __importDefault(require("pocketnet-proxy/src/kit.js"));
/**
 * A class for wallet operations, including sending funds and retrieving balances.
 */
class Wallet {
    constructor(api) {
        this.api = api;
    }
    /**
     * Sends funds from the specified address using the corresponding private key.
     *
     * @param {SendWithPrivateKeyParams} params - The parameters for the transaction.
     * @param {string} params.address - The recipient's address where the funds will be sent.
     * @param {number} params.amount - The amount of funds to send.
     * @param {string} params.key - The private key of the address sending the funds.
     * @param {'include' | 'exclude'} [params.feeMode] - Determines who pays the transaction fee:
     *        - 'include': The fee is deducted from the amount (recipient pays).
     *        - 'exclude': The fee is added on top of the amount (sender pays).
     * @returns {Promise<string>} A promise that resolves to the transaction ID (txid).
     */
    async sendFundsWithPrivateKey(params) {
        this.api.ensureInitialized();
        const proxy = await kit_js_1.default.proxy();
        return proxy.wallet.sendwithprivatekey(params);
    }
    /**
     * Retrieves the balance and unspent outputs for an address using the corresponding private key.
     *
     * @param {GetUnspentsWithPrivateKeyParams} params - The parameters for retrieving unspent outputs.
     * @param {string} params.key - The private key of the address to query.
     * @returns {Promise<any>} A promise that resolves to the unspent outputs and balance.
     */
    async getBalanceWithPrivateKey(params) {
        this.api.ensureInitialized();
        const proxy = await kit_js_1.default.proxy();
        return proxy.wallet.getunspentswithprivatekey(params);
    }
}
exports.Wallet = Wallet;
