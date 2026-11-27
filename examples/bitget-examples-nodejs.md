# **Bitget API Examples** - Node.js, JavaScript & TypeScript SDK for Bitget V2 (Classic) and V3 (UTA) REST APIs & WebSockets

This page collects short, copy-ready snippets for the most common Bitget tasks with the `bitget-api` SDK. Each snippet is a standalone ES module (`.mjs` or `.ts`), so you can paste it into a file and run it.

For complete runnable scripts, see the [V2 - Classic](./V2%20-%20Classic/) and [V3 - UTA](./V3%20-%20UTA/) folders. For one example per endpoint, see [apidoc](./apidoc/). The full SDK guide is at [siebly.io/sdk/bitget/javascript](https://siebly.io/sdk/bitget/javascript) and the docs are at [sieblyio.github.io/docs/bitget](https://sieblyio.github.io/docs/bitget/).

Bitget has switched off its V1 API. Any V1 URL (`/api/spot/v1/...`, `/api/mix/v1/...`) or V1 symbol (`BTCUSDT_SPBL`, `BTCUSDT_UMCBL`) now returns error `30032`. Use the V2 or V3 clients below, with plain symbols such as `BTCUSDT`.

## Installation

```bash
npm install bitget-api
# or
yarn add bitget-api
```

## Which client do I need?

| Account type | REST client | WebSocket client |
| --- | --- | --- |
| Classic account (V2 APIs) | `RestClientV2` | `WebsocketClientV2` |
| Unified Trading Account (V3/UTA APIs) | `RestClientV3` | `WebsocketClientV3`, plus `WebsocketAPIClient` for orders over WebSocket |

Public market data works on both without an API key. For account and trading calls, use the client that matches your account mode: once an account is upgraded to UTA, the V2 private endpoints stop working for it until you switch back to Classic.

## Create a client

### Public client (no key)

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2();

const time = await client.getServerTime();
console.log('Bitget server time:', time.data.serverTime);
```

### Private client (API key, secret and passphrase)

Bitget keys have three parts. The passphrase is the one you chose when creating the key, not your account password.

```typescript
import { RestClientV2, RestClientV3 } from 'bitget-api';

const credentials = {
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
};

// Classic account
const classic = new RestClientV2(credentials);

// Unified Trading Account
const uta = new RestClientV3(credentials);

const balances = await uta.getBalances();
console.log(balances.data);
```

### Demo trading

```typescript
import { RestClientV2 } from 'bitget-api';

const demoClient = new RestClientV2({
  apiKey: process.env.BITGET_DEMO_API_KEY!,
  apiSecret: process.env.BITGET_DEMO_API_SECRET!,
  apiPass: process.env.BITGET_DEMO_API_PASS!,
  demoTrading: true,
});

const assets = await demoClient.getSpotAccountAssets();
console.log(assets.data);
```

### CommonJS

```javascript
const { RestClientV2 } = require('bitget-api');

async function main() {
  const client = new RestClientV2();
  const ticker = await client.getSpotTicker({ symbol: 'BTCUSDT' });
  console.log('BTCUSDT last price:', ticker.data[0].lastPr);
}

main().catch(console.error);
```

## Spot market data (V2, no key)

### Ticker and last price

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2();

// One symbol. Leave symbol out to get every spot ticker.
const ticker = await client.getSpotTicker({ symbol: 'BTCUSDT' });
const t = ticker.data[0];
console.log(`BTCUSDT last ${t.lastPr}, bid ${t.bidPr}, ask ${t.askPr}`);
```

### Symbols and trading rules

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2();

const symbols = await client.getSpotSymbolInfo({ symbol: 'BTCUSDT' });
const rules = symbols.data[0];
console.log({
  minTradeAmount: rules.minTradeAmount,
  pricePrecision: rules.pricePrecision,
  quantityPrecision: rules.quantityPrecision,
  status: rules.status,
});
```

### Order book

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2();

const book = await client.getSpotOrderBookDepth({
  symbol: 'BTCUSDT',
  type: 'step0',
  limit: '5',
});
console.log('Best bid:', book.data.bids[0]);
console.log('Best ask:', book.data.asks[0]);
```

### Candles

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2();

const candles = await client.getSpotCandles({
  symbol: 'BTCUSDT',
  granularity: '1h',
  limit: '24',
});

// Each candle: [timestamp, open, high, low, close, baseVolume, usdtVolume, quoteVolume]
for (const [ts, open, high, low, close] of candles.data) {
  console.log(new Date(Number(ts)).toISOString(), open, high, low, close);
}
```

### Recent trades

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2();

const trades = await client.getSpotRecentTrades({ symbol: 'BTCUSDT', limit: '5' });
for (const trade of trades.data) {
  console.log(trade.side, trade.price, trade.size);
}
```

## Futures market data (V2, no key)

V2 futures calls take a `productType`: `USDT-FUTURES`, `COIN-FUTURES` or `USDC-FUTURES`.

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2();
const productType = 'USDT-FUTURES';

const [ticker, funding, openInterest, contract] = await Promise.all([
  client.getFuturesTicker({ symbol: 'BTCUSDT', productType }),
  client.getFuturesCurrentFundingRate({ symbol: 'BTCUSDT', productType }),
  client.getFuturesOpenInterest({ symbol: 'BTCUSDT', productType }),
  client.getFuturesContractConfig({ symbol: 'BTCUSDT', productType }),
]);

console.log('Last price:', ticker.data[0].lastPr);
console.log('Funding rate:', funding.data[0].fundingRate);
console.log('Open interest:', openInterest.data.openInterestList[0].size);
console.log('Min order size:', contract.data[0].minTradeNum);
```

### Futures candles

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2();

const candles = await client.getFuturesCandles({
  symbol: 'BTCUSDT',
  productType: 'USDT-FUTURES',
  granularity: '15m',
  limit: '10',
});
console.log(candles.data.length, 'candles, latest close:', candles.data.at(-1)?.[4]);
```

## Market data on V3 / UTA (no key)

V3 calls take a `category`: `SPOT`, `USDT-FUTURES`, `COIN-FUTURES` or `USDC-FUTURES`.

```typescript
import { RestClientV3 } from 'bitget-api';

const client = new RestClientV3();

const [instruments, tickers, book, candles] = await Promise.all([
  client.getInstruments({ category: 'SPOT', symbol: 'BTCUSDT' }),
  client.getTickers({ category: 'USDT-FUTURES', symbol: 'BTCUSDT' }),
  client.getOrderBook({ category: 'SPOT', symbol: 'BTCUSDT', limit: '5' }),
  client.getCandles({ category: 'SPOT', symbol: 'BTCUSDT', interval: '1m', limit: '5' }),
]);

console.log('Instrument:', instruments.data[0]);
console.log('Futures last price:', tickers.data[0]);
console.log('Best bid/ask:', book.data.b[0], book.data.a[0]);
console.log('Candles:', candles.data.length);
```

## Spot trading (V2 Classic account)

### Balances

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2({
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
});

const assets = await client.getSpotAccountAssets();
for (const asset of assets.data) {
  if (Number(asset.available) > 0) {
    console.log(asset.coin, 'available', asset.available, 'frozen', asset.frozen);
  }
}
```

### Limit order, then cancel it

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2({
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
});

const order = await client.spotSubmitOrder({
  symbol: 'BTCUSDT',
  side: 'buy',
  orderType: 'limit',
  force: 'post_only',
  price: '20000',
  size: '0.0001',
  clientOid: `my-order-${Date.now()}`,
});
console.log('Order id:', order.data.orderId);

const open = await client.getSpotOpenOrders({ symbol: 'BTCUSDT' });
console.log('Open orders:', open.data.length);

await client.spotCancelOrder({ symbol: 'BTCUSDT', orderId: order.data.orderId });
```

### Market order

For a spot market buy, `size` is the amount of the quote coin to spend (USDT here). For a market sell it is the amount of the base coin.

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2({
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
});

const result = await client.spotSubmitOrder({
  symbol: 'BTCUSDT',
  side: 'buy',
  orderType: 'market',
  force: 'gtc',
  size: '10', // spend 10 USDT
});
console.log(result.data);
```

### Order status and fills

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2({
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
});

const orderId = process.env.ORDER_ID!;

const status = await client.getSpotOrder({ orderId });
console.log('Status:', status.data[0]?.status);

const fills = await client.getSpotFills({ symbol: 'BTCUSDT', limit: '10' });
console.log('Recent fills:', fills.data);
```

## Futures trading (V2 Classic account)

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2({
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
});

const productType = 'USDT-FUTURES';
const marginCoin = 'USDT';

await client.setFuturesLeverage({ symbol: 'BTCUSDT', productType, marginCoin, leverage: '5' });

const order = await client.futuresSubmitOrder({
  symbol: 'BTCUSDT',
  productType,
  marginCoin,
  marginMode: 'crossed',
  side: 'buy',
  tradeSide: 'open', // only used in hedge mode, ignored in one-way mode
  orderType: 'limit',
  force: 'post_only',
  price: '20000',
  size: '0.001',
});
console.log('Order id:', order.data.orderId);

const positions = await client.getFuturesPositions({ productType, marginCoin });
console.log('Positions:', positions.data);

await client.futuresCancelOrder({ symbol: 'BTCUSDT', productType, orderId: order.data.orderId });
```

## Trading on V3 / UTA

```typescript
import { RestClientV3 } from 'bitget-api';

const client = new RestClientV3({
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
});

const order = await client.submitNewOrder({
  category: 'SPOT',
  symbol: 'BTCUSDT',
  side: 'buy',
  orderType: 'limit',
  timeInForce: 'post_only',
  price: '20000',
  qty: '0.0001',
  clientOid: `uta-${Date.now()}`,
});
console.log('Order id:', order.data.orderId);

const open = await client.getUnfilledOrders({ category: 'SPOT', symbol: 'BTCUSDT' });
console.log('Open orders:', open.data);

await client.cancelOrder({ category: 'SPOT', orderId: order.data.orderId });

const positions = await client.getCurrentPosition({ category: 'USDT-FUTURES' });
console.log('Futures positions:', positions.data);
```

## WebSockets

The WebSocket clients connect when you first subscribe, send heartbeats, reconnect and resubscribe on their own. Listen for `update` to get data.

### Public streams (V2)

```typescript
import { WebsocketClientV2 } from 'bitget-api';

const ws = new WebsocketClientV2();

ws.on('update', (event) => console.log(event.arg, event.data));
ws.on('response', (event) => console.log('response', event));
ws.on('reconnected', (event) => console.log('reconnected', event.wsKey));
ws.on('exception', (event) => console.error('exception', event));

ws.subscribeTopic('SPOT', 'ticker', 'BTCUSDT');
ws.subscribeTopic('SPOT', 'books5', 'BTCUSDT');
ws.subscribeTopic('USDT-FUTURES', 'ticker', 'BTCUSDT');
```

### Private streams (V2)

```typescript
import { WebsocketClientV2 } from 'bitget-api';

const ws = new WebsocketClientV2({
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
});

ws.on('authenticated', (event) => console.log('authenticated', event.wsKey));
ws.on('update', (event) => console.log(event.arg, event.data));
ws.on('exception', (event) => console.error('exception', event));

ws.subscribeTopic('SPOT', 'account');
ws.subscribeTopic('SPOT', 'orders', 'BTCUSDT');
ws.subscribeTopic('USDT-FUTURES', 'positions');
```

### Public and private streams (V3 / UTA)

```typescript
import { WebsocketClientV3, WS_KEY_MAP } from 'bitget-api';

const ws = new WebsocketClientV3({
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
});

ws.on('update', (event) => console.log(event));
ws.on('exception', (event) => console.error('exception', event));

ws.subscribe(
  [
    { topic: 'ticker', payload: { instType: 'spot', symbol: 'BTCUSDT' } },
    { topic: 'ticker', payload: { instType: 'usdt-futures', symbol: 'BTCUSDT' } },
  ],
  WS_KEY_MAP.v3Public,
);

ws.subscribe({ topic: 'order', payload: { instType: 'UTA' } }, WS_KEY_MAP.v3Private);
```

### Orders over WebSocket (V3 / UTA)

`WebsocketAPIClient` works like a REST client but sends requests over a persisted, authenticated WebSocket.

```typescript
import { WebsocketAPIClient } from 'bitget-api';

const wsApi = new WebsocketAPIClient({
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
});

const placed = await wsApi.submitNewOrder('spot', {
  symbol: 'BTCUSDT',
  side: 'buy',
  orderType: 'limit',
  timeInForce: 'post_only',
  price: '20000',
  qty: '0.0001',
});
console.log(placed);
```

## Error handling

Failed requests reject with the parsed Bitget response, so you can read Bitget's own `code` and `msg`.

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2();

try {
  await client.getSpotTicker({ symbol: 'NOTAREALPAIR' });
} catch (e) {
  const err = e as { code?: number; body?: { code?: string; msg?: string } };
  console.error('HTTP', err.code, 'Bitget code', err.body?.code, err.body?.msg);
}
```

## More

- SDK guide: [siebly.io/sdk/bitget/javascript](https://siebly.io/sdk/bitget/javascript)
- Docs: [sieblyio.github.io/docs/bitget](https://sieblyio.github.io/docs/bitget/)
- Bitget API reference: [bitget.com/docs/uta/Introduction](https://www.bitget.com/docs/uta/Introduction)
