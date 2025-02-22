import type PocketNetProxyApi from './pocketnet-proxy-api';
import type { GetBalanceWithPrivateKeyParams, GetBalanceWithPrivateKeyResult, SendFundsWithPrivateKeyParams, SendFundsWithPrivateKeyResult } from './wallet.types';
/**
 * A class for wallet operations, including sending funds and retrieving balances.
 */
export declare class Wallet {
    private api;
    constructor(api: PocketNetProxyApi);
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
    sendFundsWithPrivateKey(params: SendFundsWithPrivateKeyParams): Promise<SendFundsWithPrivateKeyResult>;
    /**
     * Retrieves the balance and unspent outputs for an address using the corresponding private key.
     *
     * @param {GetBalanceWithPrivateKeyParams} params - The parameters for retrieving unspent outputs.
     * @param {string} params.key - The private key of the address to query.
     * @returns {Promise<any>} A promise that resolves to the unspent outputs and balance.
     */
    getBalanceWithPrivateKey(params: GetBalanceWithPrivateKeyParams): Promise<GetBalanceWithPrivateKeyResult>;
}
//# sourceMappingURL=wallet.d.ts.map