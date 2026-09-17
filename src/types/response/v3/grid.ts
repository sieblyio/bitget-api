import type { GridIndicatorParamsV3 } from '../../request/v3/grid.js';

export interface GridBotIdResponseV3 {
  botId: string;
}

export interface GridValidateResponseV3 {
  valid: string;
  reason?: string;
  minInvestment?: string;
}

export interface GridBotOrderItemV3 {
  orderId: string;
  delegateCount: string;
  delegatePrice: string;
  changeRequired: number | string;
}

export interface GridBotOrderDetailsV3 {
  botId: string;
  symbol: string;
  buyOrderList: GridBotOrderItemV3[];
  sellOrderList: GridBotOrderItemV3[];
}

export interface GridBotDetailV3 {
  botId: string;
  symbol: string;
  status: string;
  totalProfit: string;
  roi: string;
  gridProfit: string;
  gridProfitRate: string;
  unpairedProfit: string;
  unpairedProfitRate: string;
  margin?: string;
  arbitrageAPR: string;
  totalAPR: string;
  createdTime: string;
  runningTime: string;
  currentBaseBalance?: string;
  currentQuoteBalance?: string;
  initialBaseHoldings?: string;
  initialQuoteHoldings?: string;
  reservedBaseTradingFee?: string;
  reservedQuoteTradingFee?: string;
  gridStartPrice?: string;
  gridType?: string;
  maxPrice: string;
  minPrice: string;
  gridNum: string;
  gridOrderMode: string;
  baseInvestmentCoin?: string;
  baseInvestmentAmount?: string;
  quoteInvestmentCoin?: string;
  quoteInvestmentAmount?: string;
  slippage?: string;
  triggerCondition?: string;
  triggerParams?: GridIndicatorParamsV3[];
  triggerPrice?: string;
  terminationCondition?: string;
  terminationParams?: GridIndicatorParamsV3[];
  terminationSell?: string;
  stopLoss?: string;
  takeProfit?: string;
  hodlMode?: string;
  autoTransferProfits?: string;
  arbitrageCount?: string;
  terminationReason?: string;
}

export interface NeutralGridBotDetailV3 {
  botId: string;
  symbol: string;
  status: string;
  totalProfit: string;
  roi: string;
  gridProfit: string;
  gridProfitRate: string;
  unpairedProfit: string;
  unpairedProfitRate: string;
  margin?: string;
  arbitrageAPR: string;
  totalAPR: string;
  createdTime: string;
  runningTime: string;
  gridStartPrice?: string;
  maxPrice: string;
  minPrice: string;
  gridNum: string;
  gridOrderMode: string;
  triggerPrice?: string;
  leverage?: string;
  stopLoss?: string;
  takeProfit?: string;
  holdPosition?: string;
  oneGridMinProfit?: string;
  oneGridMaxProfit?: string;
  autoTransferProfits?: string;
}
