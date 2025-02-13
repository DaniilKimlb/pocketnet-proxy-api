declare namespace global {
  var MIN_NODES_COUNT: number
  var WRITE_LOGS: boolean
  var USE_TRUST_NODES_ONLY: boolean
  var REVERSE_PROXY: boolean
  var USE_TLS_NODES_ONLY: boolean
}

declare module 'pocketnet-proxy/src/kit.js' {
  export interface SendWithPrivateKeyParams {
    address: string
    amount: number
    key: string
    feemode: 'include' | 'exclude'
  }

  export interface GetUnspentsWithPrivateKeyParams {
    key: string
  }

  export interface GetUnspentsWithPrivateKeyResult {
    unspents: unknown[]
    balance: number
  }

  export interface SignatureParams {
    signature: unknown
  }

  export type SignatureResult = boolean
  interface NodeManager {
    someProperty: string
  }

  interface Cache {
    add: (key: string, value: any) => void
    get: (key: string) => any
  }
  interface NodeManager {
    waitreadywithrating: () => Promise<void>
  }
  interface Wallet {
    sendwithprivatekey: (params: SendWithPrivateKeyParams) => Promise<string>
    getunspentswithprivatekey: (
      params: GetUnspentsWithPrivateKeyParams
    ) => Promise<GetUnspentsWithPrivateKeyResult>
  }

  interface Authorization {
    signature: (param: SignatureParams) => Promise<SignatureResult>
  }
  interface Kit {
    start: (config: {
      list: Array<'nodeManager' | 'cache', 'wallet'>
    }) => Promise<void>
    proxy: () => Promise<{
      authorization: Authorization
      api: {
        node: {
          rpc: {
            action: (params: {
              method: string
              parameters: unknown
              options?: any
            }) => Promise<any>
          }
        }
      }
      wallet: Wallet
      nodeManager: NodeManager
    }>
  }

  const kit: Kit
  export default kit
}

declare module 'pocketnet-proxy/src/lib/btc16.js';
