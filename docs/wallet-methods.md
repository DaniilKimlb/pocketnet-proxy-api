# Wallet Methods Documentation

**PocketNet Proxy API** provides wallet management functionality through the `wallet` object. These methods allow you to perform transactions and retrieve balance information using private keys, giving you a flexible way to manage your funds directly.

## Table of Contents

- [sendwithprivatekey](#sendwithprivatekey)
- [getunspentswithprivatekey](#getunspentswithprivatekey)

---

### `sendwithprivatekey`

**Description:**
Sends a specified amount of funds to a given address, signing the transaction with the provided private key. The private key corresponds to the sender's address, and this method will automatically craft and sign the transaction.

**Parameters:**
- `params: { address: string; amount: number; key: string }`
  - **`address`** (string): The recipient's address.
  - **`amount`** (number): The amount to send.
  - **`key`** (string): The private key corresponding to the source address from which the funds will be sent.

**Returns:** `Promise<any>`
A promise that resolves to the transaction result, which may include a transaction ID (txid) and other related information if the transaction is successfully broadcast to the network.

**Example:**
```typescript
proxy.wallet
  .sendwithprivatekey({
    address: 'recipientAddress',
    amount: 1000,
    key: 'privateKeyString'
  })
  .then(result => console.log('Transaction Result:', result))
  .catch(error => console.error('Failed to send transaction:', error))
```

---

### `getunspentswithprivatekey`

**Description:**
Retrieves the unspent transaction outputs (UTXOs) and balance information associated with the address derived from the given private key. These UTXOs represent the spendable funds under that private key.

**Parameters:**
- `params: { key: string }`
  - **`key`** (string): The private key for which to retrieve unspent outputs and balance.

**Returns:** `Promise<any>`
A promise that resolves to an object or array containing UTXO information and overall balance. Typically, you will receive a list of UTXOs, each including the transaction ID, output index, and amount, as well as the total available balance for that private key.

**Example:**
```typescript
proxy.wallet
  .getunspentswithprivatekey({ key: 'privateKeyString' })
  .then((unspents) => {
    console.log('Unspent Outputs and Balance Info:', unspents)
  })
  .catch(error => console.error('Failed to fetch unspent outputs:', error))
```
