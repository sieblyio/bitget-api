export type StrategyOrderTypeV3 =
  | 'tpsl'
  | 'trigger'
  | 'oco'
  | 'trailing_stop'
  | 'iceberg'
  | 'twap';

export type StrategyOrderStatusV3 =
  | 'pending'
  | 'success'
  | 'failed'
  | 'cancelled'
  | 'submitting';

export type StrategyTriggerByV3 = 'market' | 'mark';

export type StrategyTriggerOrderTypeV3 = 'limit' | 'market';

export interface StrategyOcoParamsV3 {
  ocoLimitPrice?: string;
  ocoTriggerPrice?: string;
  ocoOrderType?: StrategyTriggerOrderTypeV3;
  ocoOrderPrice?: string;
}

export interface StrategyTrailingStopParamsV3 {
  activationPrice?: string;
  activationType?: string;
  trailType?: string;
  trailVariance?: string;
  preOrderType?: StrategyTriggerOrderTypeV3;
  preOrderPrice?: string;
}

export interface StrategyIcebergParamsV3 {
  splitMode?: string;
  qtyPerOrder?: string;
  splitOrderNumbers?: string;
  orderPreference?: string;
  executionStrategy?: string;
  fixedDistanceType?: string;
  distance?: string;
  fixedPrice?: string;
  priceLimit?: string;
}

export interface StrategyTwapParamsV3 {
  duration?: string;
  interval?: string;
  orderType?: StrategyTriggerOrderTypeV3;
  limitOffsetType?: string;
  limitOffsetPercentage?: string;
  limitOffsetSpread?: string;
  twapTriggerPrice?: string;
  twapTerminationPrice?: string;
}

export interface PlaceStrategyOrderRequestV3 {
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  symbol: string;
  clientOid?: string;
  type?: StrategyOrderTypeV3;
  tpslMode?: 'full' | 'partial';
  /** Required when tpslMode=partial or for trigger orders */
  qty?: string;
  side?: 'buy' | 'sell';
  posSide?: 'long' | 'short';
  reduceOnly?: 'yes' | 'no';
  tpTriggerBy?: StrategyTriggerByV3;
  slTriggerBy?: StrategyTriggerByV3;
  takeProfit?: string;
  stopLoss?: string;
  tpOrderType?: StrategyTriggerOrderTypeV3;
  slOrderType?: StrategyTriggerOrderTypeV3;
  tpLimitPrice?: string;
  slLimitPrice?: string;
  triggerBy?: StrategyTriggerByV3;
  triggerPrice?: string;
  triggerOrderType?: StrategyTriggerOrderTypeV3;
  triggerOrderPrice?: string;
  ocoParams?: StrategyOcoParamsV3;
  trailingStopParams?: StrategyTrailingStopParamsV3;
  icebergParams?: StrategyIcebergParamsV3;
  twapParams?: StrategyTwapParamsV3;
}

export interface ModifyStrategyOrderRequestV3 {
  orderId?: string;
  clientOid?: string;
  qty: string;
  tpTriggerBy?: StrategyTriggerByV3;
  slTriggerBy?: StrategyTriggerByV3;
  takeProfit?: string;
  stopLoss?: string;
  tpOrderType?: StrategyTriggerOrderTypeV3;
  slOrderType?: StrategyTriggerOrderTypeV3;
  tpLimitPrice?: string;
  slLimitPrice?: string;
  triggerBy?: StrategyTriggerByV3;
  triggerPrice?: string;
  triggerOrderType?: StrategyTriggerOrderTypeV3;
  triggerOrderPrice?: string;
}

export interface CancelStrategyOrderRequestV3 {
  orderId?: string;
  clientOid?: string;
}

export interface GetUnfilledStrategyOrdersRequestV3 {
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  type?: StrategyOrderTypeV3;
}

export interface GetHistoryStrategyOrdersRequestV3 {
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  type?: StrategyOrderTypeV3;
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}

export interface GetStrategySubOrdersRequestV3 {
  orderId?: string;
  clientOid?: string;
  limit?: string;
  cursor?: string;
}
