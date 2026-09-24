export interface BatchModifyOrderRequestV3 {
  orderId?: string;
  clientOid?: string;
  qty?: string;
  price?: string;
  /** Custom request ID. Numbers within 18 digits. */
  requestId?: number;
  autoCancel?: 'yes' | 'no';
  /** Required from 30 Sep 2026 */
  symbol?: string;
  /** Required from 30 Sep 2026 */
  category?:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
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
  /** Required from 30 Sep 2026 */
  symbol?: string;
  /** Required from 30 Sep 2026 */
  category?:
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
}

export interface PlaceRealityOrderRequestV3 {
  category?: 'SPOT' | 'MARGIN';
  symbol: string;
  side: 'buy' | 'sell';
  orderType: 'limit' | 'market';
  qty: string;
  price?: string;
  clientOid?: string;
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
}

export type FuturesMarginModeV3 = 'crossed' | 'isolated';

export interface PlaceOrderRequestV3 {
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
}

export interface CountdownCancelAllRequestV3 {
  countdown: string; // seconds until auto-cancel (5-60, or 0 to disable)
}
