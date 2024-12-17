# Wallet Methods Documentation

**PocketNet Proxy API** provides wallet management functionality through the `wallet` object. These methods allow you to perform transactions and retrieve balance information using private keys, giving you a flexible way to manage your funds directly.

## Table of Contents

- [sendFundsWithPrivateKey](#sendFundsWithPrivateKey)
- [getBalanceWithPrivateKey](#getBalanceWithPrivateKey)

---

### `sendFundsWithPrivateKey`

**Description:**
Sends a specified amount of funds to a given address, signing the transaction with the provided private key. The private key corresponds to the sender's address, and this method will automatically craft and sign the transaction. You can also specify who pays the transaction fee using the optional `feeMode` parameter.

**Parameters:**
- `params: { address: string; amount: number; key: string; feeMode?: 'include' | 'exclude' }`
  - **`address`** (string): The recipient's address.
  - **`amount`** (number): The amount to send.
  - **`key`** (string): The private key corresponding to the source address from which the funds will be sent.
  - **`feeMode`** (`'include' | 'exclude'`, optional): Determines who pays the transaction fee.
    - **`include`**: The fee is deducted from the sent amount, so the recipient pays the fee indirectly.
    - **`exclude`**: The fee is added on top of the sent amount, so the sender pays the fee.
    - **Default**: `include`.

**Returns:** `Promise<string>`
A promise that resolves to a **transaction ID (txid)** string if the transaction is successfully broadcast to the network.

**Example:**
```typescript
proxy.wallet
  .sendFundsWithPrivateKey({
    address: 'recipientAddress',
    amount: 1000,
    key: 'privateKeyString',
    feeMode: 'exclude'
  })
  .then(txid => console.log('Transaction ID:', txid))
  .catch(error => console.error('Failed to send transaction:', error))
```

**Notes:**
- If `feeMode` is not specified, the default behavior is `include` (the recipient pays the fee).
- The `txid` returned can be used to verify the transaction on the network.

---

### `getBalanceWithPrivateKey`

**Description:**
Retrieves the unspent transaction outputs (UTXOs) and balance information associated with the address derived from the given private key. These UTXOs represent the spendable funds under that private key.

**Parameters:**
- `params: { key: string }`
  - **`key`** (string): The private key for which to retrieve unspent outputs and balance.

**Returns:**
`Promise<GetUnspentsWithPrivateKeyResult>`
A promise that resolves to an object containing the following fields:
- **`unspents`** (`unknown[]`): An array of UTXOs (Unspent Transaction Outputs), where each entry typically includes the transaction ID, output index, and amount.
- **`balance`** (`number`): The total balance (sum of all UTXOs) available for the given private key.

**Example:**
```typescript
proxy.wallet
  .getBalanceWithPrivateKey({ key: 'privateKeyString' })
  .then((result) => {
    console.log('Unspent Outputs:', result.unspents)
    console.log('Balance:', result.balance)
  })
  .catch(error => console.error('Failed to fetch unspent outputs:', error))
```
