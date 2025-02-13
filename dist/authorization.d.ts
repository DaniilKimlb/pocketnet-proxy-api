import type { SignatureParams, SignatureResult } from './authorization.types';
import type PocketNetProxyApi from './pocketnet-proxy-api';
/**
 * A class responsible for handling authorization.
 *
 * Provides a method to verify the authorization signature.
 */
export declare class Authorization {
    private api;
    constructor(api: PocketNetProxyApi);
    /**
     * Verifies the authorization signature.
     *
     * @param {SignatureParams} params - The parameters containing the signature to be verified.
     * @param {unknown} params.signature - The signature to validate.
     * @returns {Promise<SignatureResult>} A promise that resolves to a boolean indicating whether the signature is valid.
     */
    checkSignature(params: SignatureParams): Promise<SignatureResult>;
}
//# sourceMappingURL=authorization.d.ts.map