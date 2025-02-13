"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization = void 0;
/**
 * A class responsible for handling authorization.
 *
 * Provides a method to verify the authorization signature.
 */
class Authorization {
    constructor(api) {
        this.api = api;
    }
    /**
     * Verifies the authorization signature.
     *
     * @param {SignatureParams} params - The parameters containing the signature to be verified.
     * @param {unknown} params.signature - The signature to validate.
     * @returns {Promise<SignatureResult>} A promise that resolves to a boolean indicating whether the signature is valid.
     */
    async checkSignature(params) {
        var _a;
        this.api.ensureInitialized();
        return (_a = this.api.proxy) === null || _a === void 0 ? void 0 : _a.authorization.signature(params);
    }
}
exports.Authorization = Authorization;
