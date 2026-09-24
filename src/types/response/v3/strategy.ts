import type {
  StrategyIcebergParamsV3,
  StrategyOcoParamsV3,
  StrategyOrderStatusV3,
  StrategyOrderTypeV3,
  StrategyTrailingStopParamsV3,
  StrategyTriggerByV3,
  StrategyTriggerOrderTypeV3,
  StrategyTwapParamsV3,
} from '../../request/v3/strategy.js';

export interface PlaceStrategyOrderResponseV3 {
  orderId: string;
  clientOid: string;
}

export interface ModifyStrategyOrderResponseV3 {
  orderId: string;
  clientOid: string;
}

export interface StrategyOrderV3 {
  orderId: string;
  clientOid: string;
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES' | string;
  symbol: string;
  qty: string;
  posSide: 'long' | 'short';
  status: StrategyOrderStatusV3;
  type?: StrategyOrderTypeV3 | string;
  triggerType?: 'takeProfit' | 'stopLoss';
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
  createdTime: string;
  updatedTime: string;
}

export interface StrategySubOrderV3 {
  subOrderId: string;
  subClientOid?: string;
  orderId?: string;
  clientOid?: string;
  category?: string;
  symbol?: string;
  side?: string;
  posSide?: string;
  orderType?: string;
  price?: string;
  qty?: string;
  cumExecQty?: string;
  avgPrice?: string;
  status?: string;
  createdTime?: string;
  updatedTime?: string;
}
