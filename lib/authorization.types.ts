import type kit from 'pocketnet-proxy/src/kit.js'

type ProxyType = Awaited<ReturnType<typeof kit.proxy>>
type AuthorizationType = ProxyType['authorization']

type SignatureResult = Awaited<
  ReturnType<AuthorizationType['signature']>
> | undefined
type SignatureParams = Parameters<
  AuthorizationType['signature']
>[0]

export type {
  SignatureParams,
  SignatureResult,
}
