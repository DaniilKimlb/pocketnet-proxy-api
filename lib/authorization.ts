import type { SignatureParams, SignatureResult } from './authorization.types'
import type PocketNetProxyApi from './pocketnet-proxy-api'

/**
 * A class responsible for handling authorization.
 *
 * Provides a method to verify the authorization signature.
 */
export class Authorization {
  constructor(private api: PocketNetProxyApi) {}

  /**
   * Verifies the authorization signature.
   *
   * @param {SignatureParams} params - The parameters containing the signature to be verified.
   * @param {unknown} params.signature - The signature to validate.
   * @returns {Promise<SignatureResult>} A promise that resolves to a boolean indicating whether the signature is valid.
   */
  public async checkSignature(
    params: SignatureParams,
  ): Promise<SignatureResult> {
    this.api.ensureInitialized()
    return this.api.proxy?.authorization.signature(params)
  }
}
