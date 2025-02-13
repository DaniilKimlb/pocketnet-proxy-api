<p align="center">
  <img src="./docs/assets/logo.png" width="150">
</p>

<h1 align="center">PocketNet Proxy API</h1>

## Overview

The **PocketNet Proxy API** provides an easy-to-use interface to interact with the PocketNet network's RPC methods. It includes all the available methods and their corresponding parameters to interact with various network features, such as retrieving user profiles, managing transactions, obtaining blockchain information, and performing wallet-related operations.

This project provides a structured way to access the PocketNet proxy, making it simpler to integrate with applications and manage communication with the network. Each method in the library corresponds to a specific RPC action, and all method parameters and return types are fully documented for ease of use.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [RPC Methods](#rpc-methods)
- [Wallet Methods](#wallet-methods)
- [Configuration](#configuration)
- [License](#license)

## Installation

To install the library directly from the Git repository, you can use the following command:

```bash
git clone https://github.com/DaniilKimlb/pocketnet-proxy-api.git
```

Alternatively, you can add the repository as a dependency in your `package.json`:

```json
{
  "dependencies": {
    "pocketnet-proxy-api": "github:DaniilKimlb/pocketnet-proxy-api"
  }
}
```

## Usage

Here's a basic example of how to use the PocketNet Proxy API in your project:

```typescript
import PocketNetProxy from 'pocketnet-proxy-api'

// Create an instance of the PocketNetProxy
const proxyInstance = new PocketNetProxy()

// Initialize the instance
proxyInstance
  .init()
  .then(() => {
    console.log('PocketNet Proxy initialized successfully')

    // Example of calling an RPC method
    proxyInstance.rpc
      .getuserprofile({ address: 'userAddress', shortForm: 'yes' })
      .then(response => console.log('User Profile:', response))
      .catch(error => console.error('Failed to fetch user profile:', error))

    // Example of using a wallet method
    proxyInstance.wallet
      .sendwithprivatekey({ address: 'recipientAddress', amount: 1000, key: 'privateKeyString' })
      .then(txResult => console.log('Transaction sent:', txResult))
      .catch(error => console.error('Failed to send funds:', error))
  })
  .catch((error) => {
    console.error('Failed to initialize PocketNet Proxy:', error)
  })
```

## RPC Methods

The PocketNet Proxy API supports a wide range of RPC methods to interact with the network. For the complete list of methods, their descriptions, and parameter details, see the [RPC Methods Documentation](./docs/rpc-methods.md).

## Wallet Methods

In addition to RPC methods, the PocketNet Proxy API provides wallet-related functionality through the `wallet` object. These methods allow you to manage transactions and retrieve balance information by using private keys, providing more direct control over your funds:

For more details on these wallet methods and their responses, refer to the [Wallet Methods Documentation](./docs/wallet-methods.md).

## Authorization Methods

The PocketNet Proxy API also includes the `authorization` object, which provides authentication-related functionality. It allows you to verify authorization signatures to ensure secure interactions within the network.

For more details on authorization methods and their usage, see the [Authorization Methods Documentation](./docs/authorization-methods.md).

## Configuration

### Global Variables

The following global variables can be set before initializing the PocketNet Proxy:

- **`MIN_NODES_COUNT`**: Minimum number of nodes required for the proxy to function correctly.
- **`WRITE_LOGS`**: Flag to enable or disable logging of actions.
- **`USE_TRUST_NODES_ONLY`**: Set to `true` to use only trusted nodes for communication.
- **`REVERSE_PROXY`**: Flag to enable or disable reverse proxy usage.
- **`USE_TLS_NODES_ONLY`**: Set to `true` to use only TLS-secured nodes.

### Example Configuration

Before calling the `init()` method, configure the global variables as needed:

```typescript
global.MIN_NODES_COUNT = 10
global.WRITE_LOGS = true
global.USE_TRUST_NODES_ONLY = false
global.REVERSE_PROXY = true
global.USE_TLS_NODES_ONLY = false
```

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](./LICENSE) file for more information.
