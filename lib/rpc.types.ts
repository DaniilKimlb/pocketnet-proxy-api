/**
 * Interface for the `getapps` RPC method parameters.
 * Used to define the request object for retrieving app information.
 */
interface GetAppsParams {
  /** The request string containing the necessary information for the `getapps` method. */
  request: string
}

/**
 * Interface for the `getappscores` RPC method parameters.
 */
interface GetAppScoresParams {
  request: string
}

/**
 * Interface for the `getappcomments` RPC method parameters.
 */
interface GetAppCommentsParams {
  request: string
}

/**
 * Interface for the `getuserprofile` RPC method parameters.
 */
interface GetUserProfileParams {
  addresses: string[]
  shortForm?: string
}

/**
 * Interface for the `getjuryassigned` RPC method parameters.
 */
interface GetJuryAssignedParams {
  address: string
  verdict: boolean
  topHeight: number
  pageStart: number
  pageSize: number
  orderBy: string
  desc: boolean
}

/**
 * Interface for the `getjurymoderators` RPC method parameters.
 */
interface GetJuryModeratorsParams {
  jury: string
}


/**
 * Interface for the `getalljury` RPC method parameters.
 */
interface GetAllJuryParams {}

/**
 * Interface for the `getbans` RPC method parameters.
 */
interface GetBansParams {
  address: string
}


/**
 * Interface for the `getaddressregistration` RPC method parameters.
 */
interface GetAddressRegistrationParams {
  addresses: string[]
}

/**
 * Interface for the `txunspent` RPC method parameters.
 */
interface TxUnspentParams {
  addresses: string[]
  minconf: number
  maxconf: number
}

/**
 * Interface for the `getaccountearning` RPC method parameters.
 */
interface GetAccountEarningParams {
  address: string
  height: number
  depth: number
}

/**
 * Interface for the `getuserstate` RPC method parameters.
 */
interface GetUserStateParams {
  address: string
}

/**
 * Interface for the `getaddressinfo` RPC method parameters.
 */
interface GetAddressInfoParams {
  address: string
}


/**
 * Interface for the `checkstringtype` RPC method parameters.
 */
interface CheckStringTypeParams {
  string: string
}

/**
 * Interface for the `getaddresstransactions` RPC method parameters.
 */
interface GetAddressTransactionsParams {
  address: string
  pageInitBlock: number
  pageStart: number
  pageSize: number
  direction: number
  txTypes: number[]
}

/**
 * Interface for the `getblocktransactions` RPC method parameters.
 */
interface GetBlockTransactionsParams {
  blockHash: string
  pageStart: number
  pageSize: number
}

/**
 * Interface for the `getcompactblock` RPC method parameters.
 */
interface GetCompactBlockParams {
  blockhash: string
  blocknumber: number
}

/**
 * Interface for the `getaddressscores` RPC method parameters.
 */
interface GetAddressScoresParams {
  address: string
  postHashes: string[]
}

/**
 * Interface for the `getpostscores` RPC method parameters.
 */
interface GetPostScoresParams {
  postTxHash: string
}

/**
 * Interface for the `getpagescores` RPC method parameters.
 */
interface GetPageScoresParams {
  postHashes: string[]
  address: string
  commentHashes: string[]
}

/**
 * Interface for the `getcomments` RPC method parameters.
 */
interface GetCommentsParams {
  postid: string
  parentid?: string
  address?: string
  commend_ids?: string[]
}

/**
 * Interface for the `getlastcomments` RPC method parameters.
 */
interface GetLastCommentsParams {
  count: number
}

/**
 * Interface for the `getcontent` RPC method parameters.
 */
interface GetContentParams {
  hashes: string[]
  address: string
  last: boolean
}

/**
 * Interface for the `getcontents` RPC method parameters.
 */
interface GetContentsParams {
  address: string
}

/**
 * Interface for the `getuseraddress` RPC method parameters.
 */
interface GetUserAddressParams {
  user_name: string
  count: number
}

/**
 * Interface for the `getusersubscribes` RPC method parameters.
 */
interface GetUserSubscribesParams {
  address: string
  orderby: string
  orderdesc: boolean
  offset: number
  limit: number
}

/**
 * Interface for the `getusersubscribers` RPC method parameters.
 */
interface GetUserSubscribersParams {
  address: string
  orderby: string
  orderdesc: boolean
  offset: number
  limit: number
}

/**
 * Interface for the `getaccountsetting` RPC method parameters.
 */
interface GetAccountSettingParams {
  address: string
}

/**
 * Interface for the `getuserstatistic` RPC method parameters.
 */
interface GetUserStatisticParams {
  addresses: string[]
  height: number
  depthR: number
  depthC: number
  cntC: number
}

/**
 * Interface for the `gettime` RPC method parameters.
 */
interface GetTimeParams {}

/**
 * Interface for the `getpeerinfo` RPC method parameters.
 */
interface GetPeerInfoParams {}

/**
 * Interface for the `getnodeinfo` RPC method parameters.
 */
interface GetNodeInfoParams {}

/**
 * Interface for the `getcoininfo` RPC method parameters.
 */
interface GetCoinInfoParams {
  height?: number
}


/**
 * Interface for the `gettags` RPC method parameters.
 */
interface GetTagsParams {
  pageStart: number
  pageSize: number
  lang: string
}


/**
 * Interface for the `search` RPC method parameters.
 */
interface SearchParams {
  keyword: string
  type: string
  topBlock?: number
  pageStart?: number
  pageSize?: number
  address?: string
}

/**
 * Interface for the `searchusers` RPC method parameters.
 */
interface SearchUsersParams {
  keyword: string
  fieldtype: string
  orderbyrank: number
}

/**
 * Interface for the `searchlinks` RPC method parameters.
 */
interface SearchLinksParams {
  links: string
  contenttypes: string[]
  height: number
  count: number
}

/**
 * Interface for the `getmissedinfo` RPC method parameters.
 */
interface GetMissedInfoParams {
  address: string
  block_number: number
}


interface RPCMethodMap {
  getapps: GetAppsParams
  getappscores: GetAppScoresParams
  getappcomments: GetAppCommentsParams
  getuserprofile: GetUserProfileParams
  getuseraddress: GetUserAddressParams
  getuserstate: GetUserStateParams
  getuserstatistic: GetUserStatisticParams
  getusersubscribes: GetUserSubscribesParams
  getusersubscribers: GetUserSubscribersParams
  getjuryassigned: GetJuryAssignedParams
  getjurymoderators: GetJuryModeratorsParams
  getalljury: GetAllJuryParams
  getbans: GetBansParams
  getaddressregistration: GetAddressRegistrationParams
  getaddressinfo: GetAddressInfoParams
  getaddresstransactions: GetAddressTransactionsParams
  getaddressscores: GetAddressScoresParams
  getaccountearning: GetAccountEarningParams
  getaccountsetting: GetAccountSettingParams
  txunspent: TxUnspentParams
  gettransaction: GetCompactBlockParams
  getrawtransaction: GetCompactBlockParams
  decoderawtransaction: GetCompactBlockParams
  getblocktransactions: GetBlockTransactionsParams
  getcompactblock: GetCompactBlockParams
  getblock: GetCompactBlockParams
  getblockcount: GetTimeParams
  getblockhash: GetCompactBlockParams
  getblocktemplate: GetCompactBlockParams
  getbestblockhash: GetTimeParams
  getcontent: GetContentParams
  getcontents: GetContentsParams
  getpostscores: GetPostScoresParams
  getpagescores: GetPageScoresParams
  getcomments: GetCommentsParams
  getlastcomments: GetLastCommentsParams
  checkstringtype: CheckStringTypeParams
  search: SearchParams
  searchusers: SearchUsersParams
  searchlinks: SearchLinksParams
  gettags: GetTagsParams
  gettime: GetTimeParams
  getpeerinfo: GetPeerInfoParams
  getnodeinfo: GetNodeInfoParams
  getcoininfo: GetCoinInfoParams
  getnetworkinfo: GetTimeParams
  getmempoolinfo: GetTimeParams
  getrawmempool: GetTimeParams
  getdifficulty: GetCoinInfoParams
  getblockchaininfo: GetCoinInfoParams
  getchaintips: GetTimeParams
  getmissedinfo: GetMissedInfoParams
  gettxout: GetCompactBlockParams
}

type OptionalRPCParams<T> = keyof T extends never ? undefined : T

type RPCMethods = {
  [K in keyof RPCMethodMap]: (
    params?: OptionalRPCParams<RPCMethodMap[K]>
  ) => Promise<any>
}

export type { OptionalRPCParams, RPCMethodMap, RPCMethods }
