export type GridCategoryV3 = 'SPOT' | 'USDT-FUTURES' | 'USDC-FUTURES';

export type NeutralGridCategoryV3 = 'USDT-FUTURES' | 'USDC-FUTURES';

export type GridFundsSourceV3 = 'funding' | 'uta' | 'otc';

export type GridYesNoV3 = 'yes' | 'no';

export type GridOrderModeV3 = 'arithmetic' | 'geometric';

export type GridTypeV3 = 'long' | 'short' | 'neutral' | 'netural';

export type GridTriggerConditionV3 = 'instant' | 'price' | 'rsi' | 'boll';

export type GridTerminationConditionV3 = 'rsi' | 'boll';

export type GridAdjustTypeV3 = 'increase' | 'decrease';

export interface GridInvestmentAmountV3 {
  coin: string;
  amount: string;
}

export interface GridIndicatorParamsV3 {
  indicatorLength?: string;
  threshold?: string;
  multiplier?: string;
  interval?: string;
}

export interface GridBotIdRequestV3 {
  botId: string;
}

export interface GetGridBotDetailRequestV3 {
  botId: string;
}

export interface GetGridBotOrderDetailsRequestV3 {
  category: GridCategoryV3;
  botId: string;
}

export interface CloseGridBotRequestV3 {
  botId: string;
}

export interface AddGridInvestmentRequestV3 {
  category: GridCategoryV3;
  botId: string;
  coin?: string;
  size?: string;
  fundsSource: GridFundsSourceV3[];
  adjustType?: GridAdjustTypeV3;
  reinvestProfit?: GridYesNoV3;
}

export interface CreateGridBotRequestV3 {
  category: GridCategoryV3;
  symbol: string;
  maxPrice: string;
  minPrice: string;
  gridNum: string;
  gridOrderMode: GridOrderModeV3;
  investmentAmount: GridInvestmentAmountV3[];
  fundsSource?: GridFundsSourceV3[];
  slippage?: string;
  autoTransferProfits?: GridYesNoV3;
  gridType?: GridTypeV3;
  leverage?: string;
  autoReserveMargin?: GridYesNoV3;
  reservedMargin?: string;
  triggerCondition?: GridTriggerConditionV3;
  triggerParams?: GridIndicatorParamsV3[];
  triggerPrice?: string;
  terminationCondition?: GridTerminationConditionV3;
  terminationParams?: GridIndicatorParamsV3[];
  terminationSell?: GridYesNoV3;
  stopLoss?: string;
  takeProfit?: string;
  trailingGrid?: GridYesNoV3;
  movingAverageGains?: string;
  stopUpwardPrice?: string;
  hodlMode?: GridYesNoV3;
  marketOpen?: GridYesNoV3;
  lossReserve?: GridYesNoV3;
}

export type ValidateGridBotRequestV3 = CreateGridBotRequestV3;

export interface ModifyGridBotRequestV3 {
  botId: string;
  category: GridCategoryV3;
  takeProfit?: string;
  stopLoss?: string;
  terminationCondition?: GridTerminationConditionV3;
  terminationParams?: GridIndicatorParamsV3[];
  hodlMode?: GridYesNoV3;
  autoTransferProfits?: GridYesNoV3;
}

export interface ModifyGridIntervalRequestV3 {
  category: GridCategoryV3;
  botId: string;
  maxPrice: string;
  minPrice: string;
  gridNum: string;
}

export interface CreateNeutralGridBotRequestV3 {
  category: NeutralGridCategoryV3;
  symbol: string;
  maxPrice: string;
  minPrice: string;
  gridNum: string;
  gridOrderMode: GridOrderModeV3;
  fundsSource?: GridFundsSourceV3[];
  leverage?: string;
  investmentAmount: GridInvestmentAmountV3[];
  triggerPrice?: string;
  stopLoss?: string;
  takeProfit?: string;
  autoTransferProfits?: GridYesNoV3;
}

export type ValidateNeutralGridBotRequestV3 = CreateNeutralGridBotRequestV3;

export interface ModifyNeutralGridBotRequestV3 {
  botId: string;
  category: NeutralGridCategoryV3;
  takeProfit?: string;
  stopLoss?: string;
  autoTransferProfits?: GridYesNoV3;
}

export interface ModifyNeutralGridIntervalRequestV3 {
  category: NeutralGridCategoryV3;
  botId: string;
  maxPrice: string;
  minPrice: string;
  gridNum: string;
}

export interface GetNeutralGridBotDetailRequestV3 {
  botId: string;
}

export interface GetNeutralGridBotOrderDetailsRequestV3 {
  category: NeutralGridCategoryV3 | GridCategoryV3;
  botId: string;
}
