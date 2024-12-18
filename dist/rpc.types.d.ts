/**
 * Interface for the `getapps` RPC method parameters.
 * Used to define the request object for retrieving app information.
 */
interface GetAppsParams {
    /** The request string containing the necessary information for the `getapps` method. */
    request: string;
}
/**
 * Interface for the `getappscores` RPC method parameters.
 */
interface GetAppScoresParams {
    request: string;
}
/**
 * Interface for the `getappcomments` RPC method parameters.
 */
interface GetAppCommentsParams {
    request: string;
}
/**
 * Interface for the `getuserprofile` RPC method parameters.
 */
interface GetUserProfileParams {
    address: string;
    shortForm: string;
}
/**
 * Interface for the `getjuryassigned` RPC method parameters.
 */
interface GetJuryAssignedParams {
    address: string;
    verdict: boolean;
    topHeight: number;
    pageStart: number;
    pageSize: number;
    orderBy: string;
    desc: boolean;
}
/**
 * Interface for the `getjurymoderators` RPC method parameters.
 */
interface GetJuryModeratorsParams {
    jury: string;
}
/**
 * Interface for the `getjury` RPC method parameters.
 */
interface GetJuryParams {
    jury: string;
}
/**
 * Interface for the `getalljury` RPC method parameters.
 */
interface GetAllJuryParams {
}
/**
 * Interface for the `getbans` RPC method parameters.
 */
interface GetBansParams {
    address: string;
}
/**
 * Interface for the `getaddressid` RPC method parameters.
 */
interface GetAddressIdParams {
    address: string;
    id: number;
}
/**
 * Interface for the `getaddressregistration` RPC method parameters.
 */
interface GetAddressRegistrationParams {
    addresses: string[];
}
/**
 * Interface for the `txunspent` RPC method parameters.
 */
interface TxUnspentParams {
    addresses: string[];
    minconf: number;
    maxconf: number;
}
/**
 * Interface for the `getaccountearning` RPC method parameters.
 */
interface GetAccountEarningParams {
    address: string;
    height: number;
    depth: number;
}
/**
 * Interface for the `getuserstate` RPC method parameters.
 */
interface GetUserStateParams {
    address: string;
}
/**
 * Interface for the `getaddressinfo` RPC method parameters.
 */
interface GetAddressInfoParams {
    address: string;
}
/**
 * Interface for the `getbalancehistory` RPC method parameters.
 */
interface GetBalanceHistoryParams {
    addresses: string[];
    topHeight: number;
    count: number;
}
/**
 * Interface for the `checkstringtype` RPC method parameters.
 */
interface CheckStringTypeParams {
    string: string;
}
/**
 * Interface for the `getaddresstransactions` RPC method parameters.
 */
interface GetAddressTransactionsParams {
    address: string;
    pageInitBlock: number;
    pageStart: number;
    pageSize: number;
    direction: number;
    txTypes: number[];
}
/**
 * Interface for the `getblocktransactions` RPC method parameters.
 */
interface GetBlockTransactionsParams {
    blockHash: string;
    pageStart: number;
    pageSize: number;
}
/**
 * Interface for the `getcompactblock` RPC method parameters.
 */
interface GetCompactBlockParams {
    blockhash: string;
    blocknumber: number;
}
/**
 * Interface for the `getaddressscores` RPC method parameters.
 */
interface GetAddressScoresParams {
    address: string;
    postHashes: string[];
}
/**
 * Interface for the `getpostscores` RPC method parameters.
 */
interface GetPostScoresParams {
    postTxHash: string;
}
/**
 * Interface for the `getpagescores` RPC method parameters.
 */
interface GetPageScoresParams {
    postHashes: string[];
    address: string;
    commentHashes: string[];
}
/**
 * Interface for the `getcomments` RPC method parameters.
 */
interface GetCommentsParams {
    postid: string;
    parentid?: string;
    address?: string;
    commend_ids?: string[];
}
/**
 * Interface for the `getlastcomments` RPC method parameters.
 */
interface GetLastCommentsParams {
    count: number;
}
/**
 * Interface for the `getcontent` RPC method parameters.
 */
interface GetContentParams {
    hashes: string[];
    address: string;
    last: boolean;
}
/**
 * Interface for the `getcontents` RPC method parameters.
 */
interface GetContentsParams {
    address: string;
}
/**
 * Interface for the `getuseraddress` RPC method parameters.
 */
interface GetUserAddressParams {
    user_name: string;
    count: number;
}
/**
 * Interface for the `getusersubscribes` RPC method parameters.
 */
interface GetUserSubscribesParams {
    address: string;
    orderby: string;
    orderdesc: boolean;
    offset: number;
    limit: number;
}
/**
 * Interface for the `getusersubscribers` RPC method parameters.
 */
interface GetUserSubscribersParams {
    address: string;
    orderby: string;
    orderdesc: boolean;
    offset: number;
    limit: number;
}
/**
 * Interface for the `getaccountsetting` RPC method parameters.
 */
interface GetAccountSettingParams {
    address: string;
}
/**
 * Interface for the `getuserstatistic` RPC method parameters.
 */
interface GetUserStatisticParams {
    addresses: string[];
    height: number;
    depthR: number;
    depthC: number;
    cntC: number;
}
/**
 * Interface for the `gettime` RPC method parameters.
 */
interface GetTimeParams {
}
/**
 * Interface for the `getpeerinfo` RPC method parameters.
 */
interface GetPeerInfoParams {
}
/**
 * Interface for the `getnodeinfo` RPC method parameters.
 */
interface GetNodeInfoParams {
}
/**
 * Interface for the `getcoininfo` RPC method parameters.
 */
interface GetCoinInfoParams {
    height?: number;
}
/**
 * Interface for the `getposdifficulty` RPC method parameters.
 */
interface GetPosDifficultyParams {
    height?: number;
}
/**
 * Interface for the `gettags` RPC method parameters.
 */
interface GetTagsParams {
    pageStart: number;
    pageSize: number;
    lang: string;
}
/**
 * Interface for the `addtransaction` RPC method parameters.
 */
interface AddTransactionParams {
    param1: string;
    param2: Record<string, any>;
}
/**
 * Interface for the `generatetransaction` RPC method parameters.
 */
interface GenerateTransactionParams {
    address: string;
    privkeys: string[];
    outcount: number;
    type: string;
    payload: Record<string, any>;
    fee: number;
    contentaddress: number;
    confirmations: number;
    locktime: number;
}
/**
 * Interface for the `search` RPC method parameters.
 */
interface SearchParams {
    keyword: string;
    type: string;
    topBlock?: number;
    pageStart?: number;
    pageSize?: number;
    address?: string;
}
/**
 * Interface for the `searchusers` RPC method parameters.
 */
interface SearchUsersParams {
    keyword: string;
    fieldtype: string;
    orderbyrank: number;
}
/**
 * Interface for the `searchlinks` RPC method parameters.
 */
interface SearchLinksParams {
    links: string;
    contenttypes: string[];
    height: number;
    count: number;
}
/**
 * Interface for the `getmissedinfo` RPC method parameters.
 */
interface GetMissedInfoParams {
    address: string;
    block_number: number;
}
/**
 * Interface for the `getaccountblockings` RPC method parameters.
 */
interface GetAccountBlockingsParams {
    address: string;
    topHeight: number;
    pageStart: number;
    pageSize: number;
}
/**
 * Interface for the `getaccountblockers` RPC method parameters.
 */
interface GetAccountBlockersParams {
    address: string;
    topHeight: number;
    pageStart: number;
    pageSize: number;
}
interface RPCMethodMap {
    getapps: GetAppsParams;
    getappscores: GetAppScoresParams;
    getappcomments: GetAppCommentsParams;
    getuserprofile: GetUserProfileParams;
    getjuryassigned: GetJuryAssignedParams;
    getjurymoderators: GetJuryModeratorsParams;
    getjury: GetJuryParams;
    getalljury: GetAllJuryParams;
    getbans: GetBansParams;
    getaddressid: GetAddressIdParams;
    getaddressregistration: GetAddressRegistrationParams;
    getuserstate: GetUserStateParams;
    txunspent: TxUnspentParams;
    getaccountearning: GetAccountEarningParams;
    getaddressinfo: GetAddressInfoParams;
    getbalancehistory: GetBalanceHistoryParams;
    checkstringtype: CheckStringTypeParams;
    getaddresstransactions: GetAddressTransactionsParams;
    getblocktransactions: GetBlockTransactionsParams;
    getcompactblock: GetCompactBlockParams;
    getaddressscores: GetAddressScoresParams;
    getpostscores: GetPostScoresParams;
    getpagescores: GetPageScoresParams;
    getcomments: GetCommentsParams;
    getlastcomments: GetLastCommentsParams;
    getcontent: GetContentParams;
    getcontents: GetContentsParams;
    getuseraddress: GetUserAddressParams;
    getusersubscribes: GetUserSubscribesParams;
    getusersubscribers: GetUserSubscribersParams;
    getaccountsetting: GetAccountSettingParams;
    getuserstatistic: GetUserStatisticParams;
    gettime: GetTimeParams;
    getpeerinfo: GetPeerInfoParams;
    getnodeinfo: GetNodeInfoParams;
    getcoininfo: GetCoinInfoParams;
    getposdifficulty: GetPosDifficultyParams;
    gettags: GetTagsParams;
    addtransaction: AddTransactionParams;
    generatetransaction: GenerateTransactionParams;
    getaccountearningstats: GetAccountEarningParams;
    GetAccountBlockings: GetAccountBlockingsParams;
    GetAccountBlockers: GetAccountBlockersParams;
    search: SearchParams;
    searchusers: SearchUsersParams;
    searchlinks: SearchLinksParams;
    getmissedinfo: GetMissedInfoParams;
    getjuryvotes: GetJuryParams;
    getjurybalance: GetJuryParams;
    getjurylist: GetJuryParams;
    getjuryreward: GetJuryParams;
    getjuryvotescount: GetJuryParams;
    getmoderatorstatistics: GetJuryParams;
    gettransaction: GetCompactBlockParams;
    getaccountfollowers: GetUserSubscribesParams;
    getaccountfollowings: GetUserSubscribesParams;
    getaccountcontents: GetUserSubscribesParams;
    getaccountcomments: GetUserSubscribesParams;
    getaccountposts: GetUserSubscribesParams;
    getblockreward: GetUserSubscribesParams;
    getblockcount: GetUserSubscribesParams;
    getnetworkhashrate: GetUserSubscribesParams;
    getnetworkinfo: GetUserSubscribesParams;
    getrawtransaction: GetCompactBlockParams;
    decoderawtransaction: GetCompactBlockParams;
    validateaddress: GetAddressInfoParams;
    verifychain: GetTimeParams;
    getwalletinfo: GetTimeParams;
    getblockhash: GetCompactBlockParams;
    getmempoolinfo: GetTimeParams;
    getrawmempool: GetTimeParams;
    getdifficulty: GetPosDifficultyParams;
    getblocktemplate: GetCompactBlockParams;
    getnetworkstakeweight: GetPosDifficultyParams;
    getstakingstatus: GetPosDifficultyParams;
    getmintinginfo: GetPosDifficultyParams;
    getblockchaininfo: GetPosDifficultyParams;
    getchaintips: GetTimeParams;
    getblocksubsidy: GetTimeParams;
    getblock: GetCompactBlockParams;
    getbestblockhash: GetTimeParams;
    gettxout: GetCompactBlockParams;
    gettxoutproof: GetCompactBlockParams;
    verifytxoutproof: GetCompactBlockParams;
}
type OptionalRPCParams<T> = keyof T extends never ? undefined : T;
type RPCMethods = {
    [K in keyof RPCMethodMap]: (params?: OptionalRPCParams<RPCMethodMap[K]>) => Promise<any>;
};
export type { OptionalRPCParams, RPCMethodMap, RPCMethods };
//# sourceMappingURL=rpc.types.d.ts.map