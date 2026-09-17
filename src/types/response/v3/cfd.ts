import type { CfdOrderTypeV3, CfdSideV3 } from '../../request/v3/cfd.js';

export interface CfdTickerV3 {
  symbol: string;
  openPriceChange: string;
  highPrice: string;
  lowPrice: string;
  quoteTime: string;
}

export interface CfdCandlestickV3 extends Array<string> {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}

export interface PlaceCfdOrderResponseV3 {
  trxId: string;
}

export interface ModifyCfdOrderResponseV3 {
  orderId: string;
}

export interface CfdUnfilledOrderV3 {
  symbol: string;
  orderType: CfdOrderTypeV3 | string;
  side: CfdSideV3 | string;
  price: string;
  qty: string;
  takeProfit?: string;
  stopLoss?: string;
  trxId: string;
  orderId: string;
}

export interface CfdHistoryOrderV3 {
  symbol: string;
  orderType: CfdOrderTypeV3 | string;
  side: CfdSideV3 | string;
  price: string;
  qty: string;
  cumExecQty?: string;
  takeProfit?: string;
  stopLoss?: string;
  status: string;
  trxId: string;
  orderId: string;
}

export interface CfdOrderHistoryV3 {
  list: CfdHistoryOrderV3[];
}

export interface CfdCurrentPositionV3 {
  positionId: string;
  symbol: string;
  orderType: CfdOrderTypeV3 | string;
  side: CfdSideV3 | string;
  qty: string;
  openPrice: string;
  takeProfit?: string;
  stopLoss?: string;
  interest: string;
  unrealizedPnl: string;
  totalProfit: string;
}

export interface CfdFundDetailV3 {
  leverage: string;
  balance: string;
  credit: string;
  marginStopOut: string;
  marginUsed: string;
  marginCall: string;
  marginFree: string;
  marginLevel: string;
  equity: string;
  pnl: string;
  status: string;
  swap: string;
  frozen: string;
  currency: string;
}

export interface CfdTransferResponseV3 {
  transferId: string;
}

export interface CfdTransferRecordV3 {
  transferId: string;
  coin: string;
  amount: string;
  direction: string;
  status: string;
  accountType: string;
  createdTime: string;
  updatedTime: string;
}

export interface CfdTransferRecordsV3 {
  list: CfdTransferRecordV3[];
  cursor?: string;
}

export interface CfdFinancialRecordV3 {
  id: string | number;
  symbol: string;
  side: string | number;
  qty: string | number;
  swap: string | number;
  fee: string | number;
  cashFlow: string | number;
  balanceBefore: string | number;
  balanceChange: string | number;
  balanceAfter: string | number;
  creditBefore: string | number;
  creditChange: string | number;
  creditAfter: string | number;
  openPrice: string | number;
  closePrice: string | number;
  orderId: string | number;
  ts: string | number;
}

export interface CfdInstrumentV3 {
  symbol: string;
  onlineTime: string;
  currency: string;
  digits: string;
  spread: string;
  contractSize: string;
  marginCurrency: string;
  profitCurrency: string;
  stopLevel: string;
  enable: string;
  marginPercent: string;
  initialMargin: string;
  marginMode: string;
  maintMargin: string;
  maintMarginRateBuy: string;
  maintMarginRateSell: string;
  initialMarginRateBuy: string;
  initialMarginRateSell: string;
  maxVolume: string;
  minVolume: string;
  stepVolume: string;
  priceCurrency: string;
  tickSize: string;
  tickValue: string;
  leverage: string;
  tradeTime: string;
  commissionType: string;
  commissionRate: string;
  symbolCategory: string;
  exchangeRate: string;
  marginUsdRate: string;
}
