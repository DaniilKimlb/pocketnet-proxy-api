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

  interface NodeManager {
    someProperty: string
  }

  interface Cache {
    add: (key: string, value: any) => void
    get: (key: string) => any
  }

  interface Wallet {
    sendwithprivatekey: (params: SendWithPrivateKeyParams) => Promise<any>
    getunspentswithprivatekey: (params: GetUnspentsWithPrivateKeyParams) => Promise<GetUnspentsWithPrivateKeyResult>
  }

  interface Kit {
    start: (config: { list: Array<'nodeManager' | 'cache', 'wallet'> }) => Promise<void>
    proxy: () => Promise<{
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
    }>
  }

  const kit: Kit
  export default kit
}

declare module 'pocketnet-proxy/src/lib/btc16.js';
