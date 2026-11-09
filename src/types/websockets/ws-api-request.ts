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
  /** Limit orders only. no rejects a price outside the band (default). yes clamps it */
  pxAmendType?: 'yes' | 'no';
  /** Limit orders only. queue1, queue5, counterparty1, or counterparty5. Ignored for market orders */
  bboLevel?: 'queue1' | 'queue5' | 'counterparty1' | 'counterparty5';
  /** Market orders only. Decimal, default 0.02, range 0.01-0.05 */
  slippageTolerance?: string;
  /**
   * rToken routing. Accepted: internal_market | lit_market. Omit for default.
   * internal_market = on-exchange only; lit_market = broker only.
   * Omit / default = internal first, then broker. Ignored for non-rToken symbols.
   * Live since 5 Nov 2026.
   */
  venue?: 'internal_market' | 'lit_market';
  /** rToken time in force. gtd (default) or gtc (90 days). */
  rTokenTimeInForce?: 'gtd' | 'gtc';
  /**
   * Broker rebate code. Lifted onto the WS request envelope.
   * It is not sent inside args. Omit it to use the SDK broker code.
   * Place-order docs: top-level apiCode. Batch-place uses the same field.
   * Staff-confirmed: t.me/bitgetOpenapi/153820.
   */
  apiCode?: string;
}
