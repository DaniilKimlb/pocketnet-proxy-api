import type kit from 'pocketnet-proxy/src/kit.js';
type ProxyType = Awaited<ReturnType<typeof kit.proxy>>;
type WalletType = ProxyType['wallet'];
type GetBalanceWithPrivateKeyResult = Awaited<ReturnType<WalletType['getunspentswithprivatekey']>>;
type GetBalanceWithPrivateKeyParams = Parameters<WalletType['getunspentswithprivatekey']>[0];
type SendFundsWithPrivateKeyParams = Parameters<WalletType['sendwithprivatekey']>[0];
type SendFundsWithPrivateKeyResult = Awaited<ReturnType<WalletType['sendwithprivatekey']>>;
export type { GetBalanceWithPrivateKeyParams, GetBalanceWithPrivateKeyResult, SendFundsWithPrivateKeyParams, SendFundsWithPrivateKeyResult, };
//# sourceMappingURL=wallet.types.d.ts.map