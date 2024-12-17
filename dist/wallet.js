"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
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
     * @param {SendFundsWithPrivateKeyParams} params - The parameters for the transaction.
     * @param {string} params.address - The recipient's address where the funds will be sent.
     * @param {number} params.amount - The amount of funds to send.
     * @param {string} params.key - The private key of the address sending the funds.
     * @param {'include' | 'exclude'} [params.feeMode] - Determines who pays the transaction fee:
     *        - 'include': The fee is deducted from the amount (recipient pays).
     *        - 'exclude': The fee is added on top of the amount (sender pays).
     * @returns {Promise<string>} A promise that resolves to the transaction ID (txid).
     */
    async sendFundsWithPrivateKey(params) {
        var _a;
        this.api.ensureInitialized();
        return (_a = this.api.proxy) === null || _a === void 0 ? void 0 : _a.wallet.sendwithprivatekey(params);
    }
    /**
     * Retrieves the balance and unspent outputs for an address using the corresponding private key.
     *
     * @param {GetBalanceWithPrivateKeyParams} params - The parameters for retrieving unspent outputs.
     * @param {string} params.key - The private key of the address to query.
     * @returns {Promise<any>} A promise that resolves to the unspent outputs and balance.
     */
    async getBalanceWithPrivateKey(params) {
        var _a;
        this.api.ensureInitialized();
        return (_a = this.api.proxy) === null || _a === void 0 ? void 0 : _a.wallet.getunspentswithprivatekey(params);
    }
}
exports.Wallet = Wallet;
