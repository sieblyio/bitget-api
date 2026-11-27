# Node.js & Typescript Bitget API SDK

[![Build & Test](https://github.com/sieblyio/bitget-api/actions/workflows/e2etests.yml/badge.svg?branch=master)](https://github.com/sieblyio/bitget-api/actions/workflows/e2etests.yml)
[![npm version](https://img.shields.io/npm/v/bitget-api)][1]
[![npm size](https://img.shields.io/bundlephobia/min/bitget-api/latest)][1]
[![npm downloads](https://img.shields.io/npm/dt/bitget-api)][1]
[![last commit](https://img.shields.io/github/last-commit/sieblyio/bitget-api)][1]
[![CodeFactor](https://www.codefactor.io/repository/github/sieblyio/bitget-api/badge)](https://www.codefactor.io/repository/github/sieblyio/bitget-api)
[![Telegram](https://img.shields.io/badge/chat-on%20telegram-blue.svg)](https://t.me/nodetraders)
[![Bitget Tutorial](https://img.shields.io/badge/Bitget%20Tutorial-siebly.io-blue)](https://siebly.io/sdk/bitget/javascript/tutorial)

<p align="center">
  <a href="https://www.npmjs.com/package/bitget-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/sieblyio/bitget-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/sieblyio/bitget-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

[1]: https://www.npmjs.com/package/bitget-api

> [!TIP]
> Upcoming change: As part of the [Siebly.io](https://siebly.io/) brand, this SDK is now hosted under our [Siebly.io GitHub organisation](https://github.com/sieblyio). The migration is seamless and requires no user changes.

Updated & performant JavaScript & Node.js SDK for the Bitget V2 REST APIs and WebSockets.

Take a look at our dedicated [Bitget API quickstart guides for major frameworks and JavaScript runtimes](#frameworks--quickstart-guides).

- Professional, robust & performant Bitget SDK with extensive production use in live trading environments.
- Complete integration with all Bitget APIs.
  - [x] Supports V2 REST APIs & WebSockets
  - [x] Supports V3/UTA REST APIs & WebSockets (latest)
  - [x] Supports order placement via V3 WebSocket API
- Complete TypeScript support (with type declarations for all API requests & responses).
  - Strongly typed requests and responses.
  - Automated end-to-end tests on most API calls, ensuring no breaking changes are released to npm.
- Actively maintained with a modern, promise-driven interface.
- Over 100 integration tests making real API calls & WebSocket connections, validating any changes before they reach npm.
- Robust WebSocket integration with configurable connection heartbeats & automatic reconnect then resubscribe workflows.
  - Event driven messaging.
  - Smart WebSocket persistence with automatic reconnection handling.
  - Emit `reconnected` event when dropped connection is restored.
  - Optional beautification of WebSocket events for improved readability.
- Officially listed Node.js SDK in [Bitget API docs](https://bitgetlimited.github.io/apidoc/en/spot/#sdk-code-example).
- Browser support (via webpack bundle - see "Browser Usage" below).
- Support all authentication methods supported by Bitget:
  - [x] HMAC
  - [x] RSA
- Heavy automated end-to-end testing with real API calls.
  - End-to-end testing before any release.
  - Real API calls in e2e tests.
- Proxy support via axios integration.
- Active community support & collaboration in telegram: [Node.js Algo Traders](https://t.me/nodetraders).
- QuickStart Guide: https://siebly.io/sdk/bitget/javascript
- Bitget JavaScript Tutorial: https://siebly.io/sdk/bitget/javascript/tutorial

## Table of Contents

- [Installation](#installation)
  - [Frameworks & Quickstart Guides](#frameworks--quickstart-guides)
  - [Try it in the browser](#try-it-in-the-browser)
- [Examples](#examples)
- [Issues & Discussion](#issues--discussion)
- [Related Projects](#related-projects)
- [Documentation](#documentation)
- [Structure](#structure)
- [Usage](#usage)
  - [REST API Clients](#rest-api-clients)
    - [V3 REST APIs (Unified Trading Account)](#v3-rest-apis)
    - [V2 REST APIs](#v2-rest-apis)
  - [WebSockets](#websockets)
    - [V3 Unified Trading Account](#v3-unified-trading-account)
      - [Sending Orders via WebSockets](#sending-orders-via-websockets)
      - [Receiving Realtime Data](#receiving-realtime-data)
    - [V2 WebSockets](#v2-websockets)
  - [Customise Logging](#logging)
    - [Custom Logger](#customise-logging)
    - [Debug HTTP Requests](#debug-http-requests)
  - [Browser/Frontend Usage](#browserfrontend-usage)
    - [Vite and React](#vite-and-react)
    - [Next.js and server-side requests](#nextjs-and-server-side-requests)
    - [React Native and Expo](#react-native-and-expo)
    - [Standalone Webpack bundle](#standalone-webpack-bundle)
- [LLMs & AI](#use-with-llms--ai)
- [Used By](#used-by)
- [Contributions & Thanks](#contributions--thanks)

## Installation

`npm install --save bitget-api`

### Frameworks & Quickstart Guides

Our complete Bitget SDK supports all the major JavaScript runtimes. For maximum convenience, we've included guides to quickly get you started with the most popular runtimes. If you're not sure how to use this SDK with a runtime or framework not listed here, feel free to [open an issue on GitHub](https://github.com/sieblyio/bitget-api/issues).

| Runtime                    | Details                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backend (trading bots)     | Using [Node.js and JavaScript](https://sieblyio.github.io/docs/bitget/environments/node.html), [Node.js and TypeScript](https://sieblyio.github.io/docs/bitget/environments/typescript.html), [Bun](https://sieblyio.github.io/docs/bitget/environments/bun.html), or [Deno](https://sieblyio.github.io/docs/bitget/environments/deno.html). This is the recommendation for algorithmic trading systems. |
| Frontend / Web Development | Using [React with Vite](https://sieblyio.github.io/docs/bitget/environments/react.html) or [Vite with plain JavaScript](https://sieblyio.github.io/docs/bitget/environments/vite.html). Display REST and WebSocket prices in the browser.                                                                                                                                                                |
| Next.js App Router         | Using the [Next.js App Router](https://sieblyio.github.io/docs/bitget/environments/next.html) to serve the price from a Route Handler running on Node.js.                                                                                                                                                                                                                                                |
| Mobile (iOS & Android)     | Using [React Native with Expo for iOS and Android](https://sieblyio.github.io/docs/bitget/environments/expo.html). The example guides you to display the current BTCUSDT price from Bitget and stream updates over WebSockets.                                                                                                                                                                           |
| Cloudflare Workers         | [Cloudflare Workers](https://sieblyio.github.io/docs/bitget/environments/cloudflare-workers.html). Return a public price from a Worker, with a separate example for authenticated orders.                                                                                                                                                                                                                |

Refer to [runtime setup](https://sieblyio.github.io/docs/bitget/compatibility.html) for installation commands, project configuration, and public price examples.

### Try it in the browser

- Node.js / JavaScript: [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/sieblyio/docs/tree/main/starters/bitget/node?title=Bitget%20Node.js%20%2F%20JavaScript%20starter)
- Node.js / TypeScript: [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/sieblyio/docs/tree/main/starters/bitget/typescript?title=Bitget%20Node.js%20%2F%20TypeScript%20starter)
- Vite (plain JavaScript): [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](<https://stackblitz.com/fork/github/sieblyio/docs/tree/main/starters/bitget/vite?title=Bitget%20Vite%20(plain%20JavaScript)%20starter>)
- React: [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/sieblyio/docs/tree/main/starters/bitget/react?title=Bitget%20React%20starter)

No account is needed. Keep API keys out of public sandboxes.

## Examples

Refer to the [examples](./examples) folder for implementation demos.

## Issues & Discussion

- Issues? Check the [issues tab](https://github.com/sieblyio/bitget-api/issues).
- Discuss & collaborate with other node devs? Join our [Node.js Algo Traders](https://t.me/nodetraders) engineering community on telegram.
- Follow our announcement channel for real-time updates on [X/Twitter](https://x.com/sieblyio)

<!-- template_related_projects -->

## Related Projects

Check out our JavaScript/TypeScript/Node.js SDKs & Projects:

- Visit our website: [https://Siebly.io](https://siebly.io/)
- Try our REST API & WebSocket SDKs published on npmjs:
  - [Bybit JavaScript SDK: bybit-api](https://www.npmjs.com/package/bybit-api)
  - [Kraken JavaScript SDK: @siebly/kraken-api](https://www.npmjs.com/package/@siebly/kraken-api)
  - [OKX JavaScript SDK: okx-api](https://www.npmjs.com/package/okx-api)
  - [Binance JavaScript SDK: binance](https://www.npmjs.com/package/binance)
  - [Gate (gate.com) JavaScript SDK: gateio-api](https://www.npmjs.com/package/gateio-api)
  - [Bitget JavaScript SDK: bitget-api](https://www.npmjs.com/package/bitget-api)
  - [Kucoin JavaScript SDK: kucoin-api](https://www.npmjs.com/package/kucoin-api)
  - [Coinbase JavaScript SDK: coinbase-api](https://www.npmjs.com/package/coinbase-api)
  - [HTX JavaScript SDK: @siebly/htx-api](https://www.npmjs.com/package/@siebly/htx-api)
- Try my misc utilities:
  - [OrderBooks Node.js: orderbooks](https://www.npmjs.com/package/orderbooks)
  - [Crypto Exchange Account State Cache: accountstate](https://www.npmjs.com/package/accountstate)
- Check out my examples:
  - [awesome-crypto-examples Node.js](https://github.com/sieblyio/awesome-crypto-examples)
  <!-- template_related_projects_end -->

## Documentation

The [Bitget SDK documentation](https://sieblyio.github.io/docs/bitget/) covers installation, client setup, public market data, authenticated trading, and WebSocket subscriptions.

Most methods accept JS objects. These can be populated using parameters specified by Bitget's API documentation, or check the type definition in each class within this repository (see table below for convenient links to each class).

- Bitget exchange API reference
  - [V3/UTA API Documentation](https://www.bitget.com/api-doc/uta/intro) (Latest - Unified Trading Account)
  - [V2 API Documentation](https://www.bitget.com/api-doc/common/intro)
- [REST Endpoint Function List](./docs/endpointFunctionList.md)
- [TSDoc Documentation (autogenerated using typedoc)](https://tsdocs.dev/docs/bitget-api)

## Structure

This connector is fully compatible with both TypeScript and pure JavaScript projects, while the connector is written in TypeScript. A pure JavaScript version can be built using `npm run build`, which is also the version published to [npm](https://www.npmjs.com/package/bitget-api).

The version on npm is the output from the `build` command and can be used in projects without TypeScript (although TypeScript is definitely recommended).

- [src](./src) - the whole connector written in TypeScript
- [lib](./lib) - the JavaScript version of the project (built from TypeScript). This should not be edited directly, as it will be overwritten with each release.
- [dist](./dist) - the webpack bundle of the project for use in browser environments (see guidance on webpack below).
- [examples](./examples) - some implementation examples & demonstrations. Contributions are welcome!

---

# Usage

Create API credentials at Bitget:

- [Livenet API Management](https://www.bitget.com/en/support/articles/360011132814-How-to-create-API)
- [Demo Trading Environment](https://www.bitget.com/en/demo-trading)

## REST API Clients

Each REST API group has a dedicated REST client. To avoid confusion, here are the available REST clients and the corresponding API groups:
| Class | Description |
|:------------------------------------: |:---------------------------------------------------------------------------------------------: |
| [RestClientV3](src/rest-client-v3.ts) | [V3/UTA REST APIs for Bitget's Unified Trading Account](https://www.bitget.com/api-doc/uta/intro) |
| [WebsocketClientV3](src/websocket-client-v3.ts) | Universal WS client for Bitget's V3/UTA WebSockets |
| [WebsocketAPIClient](src/websocket-api-client.ts) | Websocket API Client, for RESTlike order placement via Bitget's V3/UTA WebSocket API |
| [RestClientV2](src/rest-client-v2.ts) | [V2 REST APIs](https://www.bitget.com/api-doc/common/intro) |
| [WebsocketClientV2](src/websocket-client-v2.ts) | Universal WS client for all Bitget's V2 WebSockets |

Examples for using each client can be found in:

- the [examples](./examples) folder.
- the [awesome-crypto-examples](https://github.com/sieblyio/awesome-crypto-examples) repository.

If you're missing an example, you're welcome to request one. Priority will be given to [github sponsors](https://github.com/sponsors/tiagosiebler).

### Getting Started

All REST APIs are integrated in each dedicated Rest Client class. See the above table for which REST client to use. If you've upgraded to the Unified Trading Account, you should use the V3 REST APIs and WebSockets.

There are several REST API modules as there are some differences in each API group:

1. `RestClientV3` for the latest V3/UTA APIs (Unified Trading Account) - recommended for new projects.
2. `RestClientV2` for V2 APIs - use if you haven't upgraded to UTA yet.

More Node.js & JavaScript examples for Bitget's REST APIs & WebSockets can be found in the [examples](./examples) folder on GitHub.

#### V3 REST APIs

These are only available if you have upgraded to the Unified Trading Account. If not, use the V2 APIs instead.

```javascript
import { RestClientV3 } from 'bitget-api';
// or if you prefer require:
// const { RestClientV3 } = require('bitget-api');

// note the single quotes, preventing special characters such as $ from being incorrectly passed
const client = new RestClientV3({
  apiKey: process.env.API_KEY_COM || 'insert_api_key_here',
  apiSecret: process.env.API_SECRET_COM || 'insert_api_secret_here',
  apiPass: process.env.API_PASS_COM || 'insert_api_pass_here',
});

(async () => {
  try {
    console.log(await client.getBalances());

    const newOrder = await client.submitNewOrder({
      category: 'USDT-FUTURES',
      orderType: 'market',
      side: 'buy',
      qty: '0.001',
      symbol: 'BTCUSDT',
    });

    console.log('Order submitted: ', newOrder);
  } catch (e) {
    console.error('request failed: ', e);
  }
})();
```

#### V2 REST APIs

Not sure which function to call or which parameters to use? Click the class name in the table above to look at all the function names (they are in the same order as the official API docs), and check the API docs for a list of endpoints/parameters/responses.

If you found the method you're looking for in the API docs, you can also search for the endpoint in the [RestClientV2](src/rest-client-v2.ts) class. This class has all V2 endpoints available.

```javascript
import { RestClientV2 } from 'bitget-api';
// or if you prefer require:
// const { RestClientV2 } = require('bitget-api');

const API_KEY = 'xxx';
const API_SECRET = 'yyy';
const API_PASS = 'zzz';

const client = new RestClientV2({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  apiPass: API_PASS,
});

// For public-only API calls, simply don't provide a key & secret or set them to undefined
// const client = new RestClientV2();

client
  .getSpotAccount()
  .then((result) => {
    console.log('getSpotAccount result: ', result);
  })
  .catch((err) => {
    console.error('getSpotAccount error: ', err);
  });

client
  .getSpotCandles({
    symbol: 'BTCUSDT',
    granularity: '1min',
    limit: '1000',
  })
  .then((result) => {
    console.log('getCandles result: ', result);
  })
  .catch((err) => {
    console.error('getCandles error: ', err);
  });
```

## WebSockets

All WebSocket functionality is supported via the WebsocketClient. Since there are currently 2 generations of Bitget's API, there are 2 WebsocketClient classes in this Node.js, JavaScript & TypeScript SDK for Bitget.

Use the following guidance to decide which one to use:

- **Unified Trading Account / V3** (latest generation):
  - For receiving data, use the [WebsocketClientV3](./src/websocket-client-v3.ts).
  - For sending orders via WebSockets, use the [WebsocketAPIClient](./src/websocket-api-client.ts).
- **V2** (not upgraded to Unified Trading Account yet)
  - Use the [WebsocketClientV2](./src/websocket-client-v2.ts).

All WebSocket clients support:

- Event driven messaging
- Smart WebSocket persistence with automatic reconnection
- Heartbeat mechanisms to detect disconnections
- Automatic resubscription after reconnection
- Error handling and connection monitoring
- Optional data beautification

Higher level examples below, while more thorough examples can be found in the examples folder on GitHub.

##### V3 Unified Trading Account

###### Sending orders via WebSockets

The V3 / Unified Trading Account APIs introduce order placement via a persisted WebSocket connection. This Bitget Node.js, JavaScript & TypeScript SDK supports Bitget's full V3 API offering, including the WebSocket API.

There are two approaches to placing orders via the Bitget WebSocket APIs. The recommended route is to use the dedicated WebsocketAPIClient class, included with this SDK.

This integration looks & feels like a REST API client, but uses WebSockets, via the WebsocketClient's sendWSAPIRequest method. It returns promises and has end to end types.

A simple example is below, but for a more thorough example, check the example here: [./examples/V3/ws-api-client-trade.ts](./examples/V3/ws-api-client-trade.ts)

```typescript
import { WebsocketAPIClient } from 'bitget-api';
// or if you prefer require:
// const { WebsocketAPIClient } = require("bitget-api");

// Make an instance of the WS API Client class with your API keys
const wsClient = new WebsocketAPIClient({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  apiPass: API_PASS,

  // Whether to use the demo trading wss connection
  // demoTrading: true,
});

async function start() {
  // Start using it like a REST API. All actions are sent via a persisted WebSocket connection.

  /**
   * Place Order
   * https://www.bitget.com/api-doc/uta/websocket/private/Place-Order-Channel#request-parameters
   */
  try {
    const res = await wsClient.submitNewOrder('spot', {
      orderType: 'limit',
      price: '100',
      qty: '0.1',
      side: 'buy',
      symbol: 'BTCUSDT',
      timeInForce: 'gtc',
    });

    console.log(new Date(), 'WS API "submitNewOrder()" result: ', res);
  } catch (e) {
    console.error(new Date(), 'Exception with WS API "submitNewOrder()": ', e);
  }
}

start().catch((e) => console.error('Exception in example: '.e));
```

###### Receiving realtime data

Use the WebsocketClientV3 to receive data via the V3 WebSockets

```typescript
import { WebsocketClientV3 } from "bitget-api";
// or if you prefer require:
// const { WebsocketClientV3 } = require("bitget-api");

const API_KEY = "yourAPIKeyHere";
const API_SECRET = "yourAPISecretHere;
const API_PASS = "yourAPIPassHere";

const wsClient = new WebsocketClientV3(
  {
    // Only necessary if you plan on using private/account websocket topics
    apiKey: API_KEY,
    apiSecret: API_SECRET,
    apiPass: API_PASS,
  }
);

// Connect event handlers to process incoming events
wsClient.on('update', (data) => {
  console.log('WS raw message received ', data);
  // console.log('WS raw message received ', JSON.stringify(data, null, 2));
});

wsClient.on('open', (data) => {
  console.log('WS connection opened:', data.wsKey);
});
wsClient.on('response', (data) => {
  console.log('WS response: ', JSON.stringify(data, null, 2));
});
wsClient.on('reconnect', ({ wsKey }) => {
  console.log('WS automatically reconnecting.... ', wsKey);
});
wsClient.on('reconnected', (data) => {
  console.log('WS reconnected ', data?.wsKey);
});
wsClient.on('exception', (data) => {
  console.log('WS error', data);
});

/**
 * Subscribe to topics as you wish
 */

// You can subscribe to one topic at a time
wsClient.subscribe(
  {
    topic: 'account',
    payload: {
      instType: 'UTA', // Note: all account events go on the UTA instType
    },
  },
  WS_KEY_MAP.v3Private, // This parameter points to private or public
);

// Note: all account events go on the UTA instType
const ACCOUNT_INST_TYPE = 'UTA';
const ACCOUNT_WS_KEY = WS_KEY_MAP.v3Private;

// Or multiple at once:
wsClient.subscribe(
  [
    {
      topic: 'account',
      payload: {
        instType: ACCOUNT_INST_TYPE,
      },
    },
    {
      topic: 'position',
      payload: {
        instType: ACCOUNT_INST_TYPE,
      },
    },
    {
      topic: 'fill',
      payload: {
        instType: ACCOUNT_INST_TYPE,
      },
    },
    {
      topic: 'order',
      payload: {
        instType: ACCOUNT_INST_TYPE,
      },
    },
  ],
  ACCOUNT_WS_KEY,
);

// Example public events
wsClient.subscribe(
  [
    {
      topic: 'ticker',
      payload: {
        instType: 'spot',
        symbol: 'BTCUSDT',
      },
    },
    {
      topic: 'ticker',
      payload: {
        instType: 'spot',
        symbol: 'ETHUSDT',
      },
    },
    {
      topic: 'ticker',
      payload: {
        instType: 'spot',
        symbol: 'XRPUSDT',
      },
    },
    {
      topic: 'ticker',
      payload: {
        instType: 'usdt-futures',
        symbol: 'BTCUSDT',
      },
    },
    {
      topic: 'ticker',
      payload: {
        instType: 'usdt-futures',
        symbol: 'BTCUSDT',
      },
    },
  ],
  WS_KEY_MAP.v3Public,
);
```

For more examples, including how to use websockets with Bitget, check the [examples](./examples/) and [test](./test/) folders.

### V2 WebSockets

If you haven't upgraded to the Unified Trading Account, use the V2 WebSocket client:

```javascript
import { WebsocketClientV2 } from 'bitget-api';
// or if you prefer require:
// const { WebsocketClientV2 } = require('bitget-api');

const API_KEY = 'xxx';
const API_SECRET = 'yyy';
const API_PASS = 'zzz';

const wsClient = new WebsocketClientV2({
  apiKey: API_KEY,
  apiSecret: API_SECRET,
  apiPass: API_PASS,
  // Optional: connect to demo trading environment
  // demoTrading: true,
});

// Handle incoming messages
wsClient.on('update', (data) => {
  console.log('WS update received: ', data);
});

wsClient.on('open', (data) => {
  console.log('WS connection opened: ', data.wsKey);
});

wsClient.on('reconnected', (data) => {
  console.log('WS reconnected: ', data?.wsKey);
});

wsClient.on('exception', (data) => {
  console.log('WS error: ', data);
});

// Subscribe to public data streams
wsClient.subscribeTopic('SPOT', 'ticker', symbol);

// Subscribe to private data streams (requires authentication)
wsClient.subscribeTopic('SPOT', 'account');
```

---

## Logging

### Customise logging

Pass a custom logger which supports the log methods `trace`, `info` and `error`, or override methods from the default logger as desired.

```javascript
import { WebsocketClientV2, DefaultLogger } from 'bitget-api';
// or if you prefer require:
// const { WebsocketClientV2, DefaultLogger } = require('bitget-api');

// Disable all logging on the trace level (less console logs)
const customLogger = {
  ...DefaultLogger,
  trace: () => {},
};

const ws = new WebsocketClientV2(
  {
    apiKey: 'API_KEY',
    apiSecret: 'API_SECRET',
    apiPass: 'API_PASS',
  },
  customLogger,
);
```

### Debug HTTP requests

In rare situations, you may want to see the raw HTTP requets being built as well as the API response. These can be enabled by setting the `BITGETTRACE` env var to `true`.

## Browser/Frontend Usage

The npm package includes ES module and CommonJS builds. You do not need to build the SDK's standalone Webpack bundle to use it in a frontend project. Choose the setup for your application below.

### Vite and React

Use the [Vite guide](https://sieblyio.github.io/docs/bitget/environments/vite.html) or [React guide](https://sieblyio.github.io/docs/bitget/environments/react.html) for a complete public market-data project that imports `bitget-api` from npm.

Keep the supplied bundler configuration with the example: it provides EventEmitter and replaces the SDK's Node-only HTTPS Agent with a browser guard. Browsers manage connections, so omit `keepAlive`. These browser examples use public Bitget market data. Keep private keys and API credentials in a secure server-side environment and make authenticated calls there.

Browser REST requests also depend on Bitget's CORS policy. If a request is blocked, call the SDK through your application's server route instead. A development proxy does not solve CORS for a deployed application.

### Next.js and server-side requests

The [Next.js guide](https://sieblyio.github.io/docs/bitget/environments/next.html) runs the SDK in a Node.js Route Handler and returns the result to the frontend. Use this pattern when requests need credentials or cannot be made directly from the browser.

### React Native and Expo

Follow the [Expo guide](https://sieblyio.github.io/docs/bitget/environments/expo.html) for its Metro configuration and required polyfills, including `events`, `buffer`, `https-browserify`, `stream-http` and `url`. Browser bundler configuration is not interchangeable with Metro configuration. The example uses public Bitget market data; keep authenticated operations on your server.

### Standalone Webpack bundle

If you need a standalone UMD bundle rather than npm imports in your application, the SDK repository includes a [Webpack configuration](./webpack/webpack.config.cjs). From a checkout of this repository:

```sh
npm install
npm run build
npm run pack
```

The configuration writes `dist/bitgetapi.js` with the `bitgetapi` global name. This is a separate packaging option, not a required step for the framework guides above. Browser-specific configuration and API access restrictions still apply.

For older browser integrations that require Node `crypto` and `stream` polyfills, install `crypto-browserify` and `stream-browserify` and configure your bundler to resolve those modules to the polyfills. The previous setup also supplied `window.global = window` for dependencies that expect a Node-style global. The repository's Webpack configuration disables Node `http` and `https`; it does not configure these crypto and stream polyfills automatically.

## Use with LLMs & AI

This SDK includes a bundled `llms.txt` file in the root of the repository. If you're developing with LLMs, use the included `llms.txt` with your LLM - it will significantly improve the LLMs understanding of how to correctly use this SDK.

This file contains AI optimised structure of all the functions in this package, and their parameters for easier use with any learning models or artificial intelligence.

---

## Used By

[![Repository Users Preview Image](https://dependents.info/sieblyio/bitget-api/image)](https://github.com/sieblyio/bitget-api/network/dependents)

---

<!-- template_contributions -->

### Contributions & Thanks

Have my projects helped you? Share the love, there are many ways you can show your thanks:

- Star & share my projects.
- Are my projects useful? Sponsor me on Github and support my effort to maintain & improve them: https://github.com/sponsors/tiagosiebler
- Have an interesting project? Get in touch & invite me to it.
- Or buy me all the coffee:
  - ETH(ERC20): `0xA3Bda8BecaB4DCdA539Dc16F9C54a592553Be06C` <!-- metamask -->
- Sign up with my referral links:
  - OKX (receive a 20% fee discount!): https://www.okx.com/join/42013004
  - Binance (receive a 20% fee discount!): https://accounts.binance.com/register?ref=OKFFGIJJ
  - HyperLiquid (receive a 4% fee discount!): https://app.hyperliquid.xyz/join/SIEBLY
  - Gate: https://www.gate.io/signup/NODESDKS?ref_type=103

<!---
old ones:
  - BTC: `1C6GWZL1XW3jrjpPTS863XtZiXL1aTK7Jk`
  - BTC(SegWit): `bc1ql64wr9z3khp2gy7dqlmqw7cp6h0lcusz0zjtls`
  - ETH(ERC20): `0xe0bbbc805e0e83341fadc210d6202f4022e50992`
  - USDT(TRC20): `TA18VUywcNEM9ahh3TTWF3sFpt9rkLnnQa
  - gate: https://www.gate.io/signup/AVNNU1WK?ref_type=103

-->
<!-- template_contributions_end -->

### Contributions & Pull Requests

Contributions are encouraged, I will review any incoming pull requests. See the issues tab for todo items.

<!-- template_star_history -->

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sieblyio/bybit-api,sieblyio/okx-api,sieblyio/binance,sieblyio/bitget-api,sieblyio/bitmart-api,sieblyio/gateio-api,sieblyio/kucoin-api,sieblyio/coinbase-api,sieblyio/orderbooks,sieblyio/accountstate,sieblyio/awesome-crypto-examples&type=Date)](https://star-history.com/#sieblyio/bybit-api&sieblyio/okx-api&sieblyio/binance&sieblyio/bitget-api&sieblyio/bitmart-api&sieblyio/gateio-api&sieblyio/kucoin-api&sieblyio/coinbase-api&sieblyio/orderbooks&sieblyio/accountstate&sieblyio/awesome-crypto-examples&Date)

<!-- template_star_history_end -->
