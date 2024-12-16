# Wallet Methods Documentation

**PocketNet Proxy API** provides wallet management functionality through the `wallet` object. These methods allow you to perform transactions and retrieve balance information using private keys, giving you a flexible way to manage your funds directly.

## Table of Contents

- [sendFundsWithPrivateKey](#sendFundsWithPrivateKey)
- [getBalanceWithPrivateKey](#getBalanceWithPrivateKey)

---

### `sendFundsWithPrivateKey`

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
  .getBalanceWithPrivateKey({
    address: 'recipientAddress',
    amount: 1000,
    key: 'privateKeyString'
  })
  .then(result => console.log('Transaction Result:', result))
  .catch(error => console.error('Failed to send transaction:', error))
```

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
  .getunspentswithprivatekey({ key: 'privateKeyString' })
  .then((result) => {
    console.log('Unspent Outputs:', result.unspents)
    console.log('Balance:', result.balance)
  })
  .catch(error => console.error('Failed to fetch unspent outputs:', error))
```
