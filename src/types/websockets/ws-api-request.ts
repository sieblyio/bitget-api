import type { FuturesMarginModeV3 } from '../request/v3/trade.js';

export interface WSAPIPlaceOrderRequestV3 {
  symbol: string;
  orderType: 'limit' | 'market';
  qty: string;
  price?: string;
  side: 'buy' | 'sell';
  posSide?: 'long' | 'short';
  timeInForce?: 'gtc' | 'ioc' | 'fok' | 'post_only' | 'rpi';
  reduceOnly?: 'YES' | 'NO'; // Note: reduceOnly is not supported for batch place WS API. Might be supported starting late Q4 2025, but not supported yet.
  /** Futures only. Defaults to crossed */
  marginMode?: FuturesMarginModeV3;
  clientOid?: string;
  stpMode?: 'none' | 'cancel_taker' | 'cancel_maker' | 'cancel_both';
  tpTriggerBy?: 'market' | 'mark';
  slTriggerBy?: 'market' | 'mark';
  takeProfit?: string;
  stopLoss?: string;
  tpOrderType?: 'limit' | 'market';
  slOrderType?: 'limit' | 'market';
  tpLimitPrice?: string;
  slLimitPrice?: string;
  /** Order TTL in ms [10, 60000]. Only effective when requestTime is also set on the envelope */
  receiveWindow?: string;
  /** Spot only. Default: no */
  autoBorrow?: 'yes' | 'no';
}
