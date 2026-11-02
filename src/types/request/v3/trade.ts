export interface BatchModifyOrderRequestV3 {
  orderId?: string;
  clientOid?: string;
  qty?: string;
  price?: string;
  /** Custom request ID. Numbers within 18 digits. */
  requestId?: number;
  autoCancel?: 'yes' | 'no';
  /** Required since 30 Sep 2026 */
  symbol: string;
  /** Required since 30 Sep 2026 */
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  /** Limit orders only. no rejects a price outside the band (default). yes clamps it */
  pxAmendType?: 'yes' | 'no';
}

export interface CancelAllOrdersRequestV3 {
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  symbol?: string;
}

export interface CancelBatchOrdersRequestV3 {
  orderId?: string;
  clientOid?: string;
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  symbol: string;
}

export interface CloseAllPositionsRequestV3 {
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol?: string;
  posSide?: 'long' | 'short';
}

export interface CancelOrderRequestV3 {
  orderId?: string;
  clientOid?: string;
  category?:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
}

export type FuturesMarginModeV3 = 'crossed' | 'isolated';

export interface GetMaxOpenAvailableRequestV3 {
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  symbol: string;
  orderType: 'limit' | 'market';
  side: 'buy' | 'sell';
  price?: string;
  size?: string;
  /** Spot only. Default: no */
  autoBorrow?: 'yes' | 'no';
  /**
   * crossed (default) or isolated.
   * Under isolated margin, available excludes futures trial funds.
   */
  marginMode?: FuturesMarginModeV3;
}

export interface GetOrderInfoRequestV3 {
  orderId?: string;
  clientOid?: string;
}

export interface GetFillsRequestV3 {
  category?:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  orderId?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}

export interface GetUnfilledOrdersRequestV3 {
  category?:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  symbol?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}

export interface GetHistoryOrdersRequestV3 {
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  symbol?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}

export interface GetPositionHistoryRequestV3 {
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}

export interface GetCurrentPositionRequestV3 {
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol?: string;
  posSide?: 'long' | 'short';
}

export interface ModifyOrderRequestV3 {
  orderId?: string;
  clientOid?: string;
  qty?: string;
  price?: string;
  /** Custom request ID. Numbers within 18 digits. */
  requestId?: number;
  autoCancel?: 'yes' | 'no';
  /** Required since 30 Sep 2026 */
  symbol: string;
  /** Required since 30 Sep 2026 */
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  tpTriggerBy?: 'market' | 'mark';
  slTriggerBy?: 'market' | 'mark';
  takeProfit?: string;
  stopLoss?: string;
  tpOrderType?: 'limit' | 'market';
  slOrderType?: 'limit' | 'market';
  tpLimitPrice?: string;
  slLimitPrice?: string;
  /** Limit orders only. no rejects a price outside the band (default). yes clamps it */
  pxAmendType?: 'yes' | 'no';
}

export interface PlaceRealityOrderRequestV3 {
  category?: 'SPOT' | 'MARGIN';
  symbol: string;
  side: 'buy' | 'sell';
  orderType: 'limit' | 'market';
  qty: string;
  price?: string;
  clientOid?: string;
  /**
   * rToken routing. internalization = on-exchange pool only.
   * lit_market (default) = internal first, then the public market.
   * The 13 Oct changelog applies this to place-reality-order as well.
   * The place-reality-order parameter table does not list it yet.
   */
  venue?: 'internalization' | 'lit_market';
  /**
   * rToken time in force. gtd (default) = current session.
   * gtc = 90 days. Same changelog note as venue.
   */
  rTokenTimeInForce?: 'gtd' | 'gtc';
}

export interface CancelRealityOrderRequestV3 {
  category?: 'SPOT' | 'MARGIN';
  symbol: string;
  orderId?: string;
  clientOid?: string;
}

export interface PlaceBatchOrdersRequestV3 {
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  symbol: string;
  qty: string;
  price?: string;
  side: 'buy' | 'sell';
  orderType: 'limit' | 'market';
  timeInForce?: 'ioc' | 'fok' | 'gtc' | 'post_only';
  posSide?: 'long' | 'short';
  clientOid?: string;
  reduceOnly?: 'yes' | 'no';
  /** Limit orders only. no rejects a price outside the band (default). yes clamps it */
  pxAmendType?: 'yes' | 'no';
  /**
   * Unix ms. Used with receiveWindow.
   * If omitted, receiveWindow has no effect.
   * An order that reaches the matching engine after requestTime + receiveWindow is canceled.
   */
  requestTime?: string;
  /** Validity window in ms. Range [10, 60000]. Requires requestTime. */
  receiveWindow?: string;
}

export interface PlaceOrderRequestV3 {
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  symbol: string;
  /**
   * Futures qty must be a multiple of quantityMultiplier
   * and have at most quantityPrecision decimal places.
   * Both come from /api/v3/market/instruments. Futures only.
   */
  qty: string;
  price?: string;
  side: 'buy' | 'sell';
  /**
   * Market orders always run as IOC.
   * Staff-confirmed: t.me/bitgetOpenapi/153169.
   * timeInForce does not change that.
   */
  orderType: 'limit' | 'market';
  timeInForce?: 'ioc' | 'fok' | 'gtc' | 'post_only' | 'rpi';
  posSide?: 'long' | 'short';
  clientOid?: string;
  reduceOnly?: 'yes' | 'no';
  /** Futures only. Defaults to crossed */
  marginMode?: FuturesMarginModeV3;
  stpMode?: 'none' | 'cancel_taker' | 'cancel_maker' | 'cancel_both';
  tpTriggerBy?: 'market' | 'mark';
  slTriggerBy?: 'market' | 'mark';
  takeProfit?: string;
  stopLoss?: string;
  tpOrderType?: 'limit' | 'market';
  slOrderType?: 'limit' | 'market';
  tpLimitPrice?: string;
  slLimitPrice?: string;
  /** Spot only. Default: no */
  autoBorrow?: 'yes' | 'no';
  /** Limit orders only. no rejects a price outside the band (default). yes clamps it */
  pxAmendType?: 'yes' | 'no';
  /** Limit orders only. queue1, queue5, counterparty1, or counterparty5 */
  bboLevel?: 'queue1' | 'queue5' | 'counterparty1' | 'counterparty5';
  /** Market orders only. Decimal, default 0.02, range 0.01-0.05 */
  slippageTolerance?: string;
  /**
   * rToken routing. internalization = on-exchange pool only.
   * lit_market (default) = internal first, then the public market.
   * Ignored for non-rToken symbols. timeInForce is also ignored for rToken.
   */
  venue?: 'internalization' | 'lit_market';
  /**
   * rToken time in force. gtd (default) lasts the current session.
   * gtc lasts 90 days. Ignored for non-rToken symbols.
   */
  rTokenTimeInForce?: 'gtd' | 'gtc';
  /**
   * Unix ms. Used with receiveWindow.
   * If omitted, receiveWindow has no effect.
   * An order that reaches the matching engine after requestTime + receiveWindow is canceled.
   */
  requestTime?: string;
  /** Validity window in ms. Range [10, 60000]. Requires requestTime. */
  receiveWindow?: string;
}

export interface CountdownCancelAllRequestV3 {
  countdown: string; // seconds until auto-cancel (5-60, or 0 to disable)
}
