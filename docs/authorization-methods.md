# Authorization Methods Documentation

**PocketNet Proxy API** provides authorization functionality through the `authorization` object. These methods ensure secure authentication by verifying digital signatures.

## Table of Contents

- [checkSignature](#checkSignature)

---

### `checkSignature`

**Description:**
Verifies the provided authorization signature to confirm its validity. This method is used to authenticate users and validate requests within the PocketNet network.

**Parameters:**
- `params: { signature: unknown }`
  - **`signature`** (`unknown`): The authorization signature to be verified.

**Returns:** `Promise<boolean>`
A promise that resolves to `true` if the signature is valid, or `false` if it is invalid.

**Example:**
```typescript
proxy.authorization
  .checkSignature({ signature: 'signatureString' })
  .then((isValid) => {
    if (isValid) {
      console.log('Signature is valid.')
    }
    else {
      console.log('Signature is invalid.')
    }
  })
  .catch(error => console.error('Failed to verify signature:', error))
```

**Notes:**
- This method ensures the security and integrity of authenticated requests.
- The validity of the signature depends on the signing mechanism used within the PocketNet network.
