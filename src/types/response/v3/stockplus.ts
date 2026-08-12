/**
 *
 *
 * Stock+ (UTA)
 *
 *
 */

export interface StockPlusOptionQuoteItemV3 {
  symbol: string;
  lastDone: string;
  prevClose: string;
  open: string;
  high: string;
  low: string;
  timestamp: string;
  volume: string;
  turnover: string;
  tradeStatus: string;
  impliedVolatility: string;
  openInterest: string;
  expiryDate: string;
  strikePrice: string;
  contractMultipier: string;
  contractType: string;
  contractSize: string;
  direction: string;
  historicalVolatility: string;
  underlyingSymbol: string;
}

export interface StockPlusOptionQuoteV3 {
  secuQuote: StockPlusOptionQuoteItemV3[];
}

export interface StockPlusOptionStrikePriceInfoV3 {
  price: string;
  callSymbol: string;
  putSymbol: string;
  standard: boolean;
}

export interface StockPlusOptionChainInfoV3 {
  strikePriceInfo: StockPlusOptionStrikePriceInfoV3[];
}

export interface StockPlusOptionExpiryDateV3 {
  expiryDate: string[];
}

export interface StockPlusOptionVolumeV3 {
  c: string;
  p: string;
}

export interface StockPlusStaticInfoItemV3 {
  symbol: string;
  nameCn: string;
  nameEn: string;
  exchange: string;
  currency: string;
  lotSize: number | string;
  totalShares: string | number;
  circulatingShares: string | number;
  eps: string | number;
  epsTtm: string | number;
  bps: string | number;
  dividendYield: string | number;
  stockDerivatives: string[];
  board: string;
}

export interface StockPlusStaticInfoV3 {
  list: StockPlusStaticInfoItemV3[];
}

export interface StockPlusSessionQuoteV3 {
  lastDone: string | number;
  timestamp: string;
  volume: string | number;
  turnover: string | number;
  high: string | number;
  low: string | number;
  prevClose: string | number;
}

export interface StockPlusQuoteItemV3 {
  symbol: string;
  lastDone: string | number;
  prevClose: string | number;
  open: string | number;
  high: string | number;
  low: string | number;
  timestamp: string;
  volume: string | number;
  turnover: string | number;
  tradeStatus: string;
  preMarketQuote?: StockPlusSessionQuoteV3 | null;
  postMarketQuote?: StockPlusSessionQuoteV3 | null;
  overnightQuote?: StockPlusSessionQuoteV3 | null;
}

export interface StockPlusQuoteV3 {
  list: StockPlusQuoteItemV3[];
}

export interface StockPlusTradeDetailItemV3 {
  price: string | number;
  volume: string | number;
  timestamp: string;
  tradeType: string;
  direction: string;
  tradeSession: string;
}

export type StockPlusTradeDetailV3 = StockPlusTradeDetailItemV3[];

export interface StockPlusIntradayItemV3 {
  price: string | number;
  timestamp: string;
  volume: string | number;
  turnover: string | number;
  avgPrice: string | number;
}

export interface StockPlusIntradayV3 {
  list: StockPlusIntradayItemV3[];
}

export interface StockPlusCandlestickItemV3 {
  close: string;
  open: string;
  low: string;
  high: string;
  volume: string;
  turnover: string;
  timestamp: string;
  tradeSession: string;
}

export interface StockPlusCandlestickV3 {
  list: StockPlusCandlestickItemV3[];
}

export type StockPlusHistoryCandlestickV3 = StockPlusCandlestickV3;

export interface StockPlusDepthLevelV3 {
  position: number;
  price: string;
  volume: string;
  orderNum: number;
}

export interface StockPlusDepthV3 {
  asks: StockPlusDepthLevelV3[];
  bids: StockPlusDepthLevelV3[];
}

export interface StockPlusPlaceOrderResponseV3 {
  orderId: string;
  clientOid: string;
  symbol: string;
}

export type StockPlusCancelOrderResponseV3 = StockPlusPlaceOrderResponseV3;
export type StockPlusModifyOrderResponseV3 = StockPlusPlaceOrderResponseV3;

export interface StockPlusOrderV3 {
  orderId: string;
  status: string;
  stockName: string;
  quantity: string | number;
  executedQuantity: string | number;
  price: string | number | null;
  executedPrice: string | number | null;
  submittedAt: string;
  side: string;
  symbol: string;
  orderType: string;
  lastDone: string | number | null;
  triggerPrice: string | number | null;
  msg: string;
  tag: string;
  timeInForce: string;
  expireDate: string | null;
  updatedAt: string | null;
  triggerAt: string | null;
  trailingAmount: string | number | null;
  trailingPercent: string | number | null;
  limitOffset: string | number | null;
  triggerStatus: string | null;
  currency: string;
  outsideRth: string;
  remark?: string;
  limitDepthLevel: number | null;
  triggerCount: number | null;
  monitorPrice: string | null;
}

export interface StockPlusOrdersV3 {
  orders: StockPlusOrderV3[];
}

export interface StockPlusHistoryOrdersV3 {
  hasMore: boolean;
  orders: StockPlusOrderV3[];
}

export interface StockPlusOrderHistoryItemV3 {
  price: string | number;
  quantity: string | number;
  status: string;
  msg: string;
  time: string;
}

export interface StockPlusChargeFeeItemV3 {
  code: string;
  name: string;
  amount: number | string;
  currency: string;
}

export interface StockPlusChargeCategoryV3 {
  code: string;
  name: string;
  fees: StockPlusChargeFeeItemV3[];
}

export interface StockPlusChargeDetailV3 {
  totalAmount: number | string;
  currency: string;
  items: StockPlusChargeCategoryV3[];
}

export interface StockPlusOrderDetailV3 extends StockPlusOrderV3 {
  freeStatus?: string;
  freeAmount?: string | null;
  freeCurrency?: string | null;
  deductionsStatus?: string;
  deductionsAmount?: string | null;
  deductionsCurrency?: string | null;
  platformDeductedStatus?: string;
  platformDeductedAmount?: string | null;
  platformDeductedCurrency?: string | null;
  history?: StockPlusOrderHistoryItemV3[];
  chargeDetail?: StockPlusChargeDetailV3;
}

export interface StockPlusExecutionV3 {
  orderId: string;
  tradeId: string;
  symbol: string;
  tradeDoneAt: string;
  quantity: number | string;
  price: number | string;
}

export interface StockPlusTodayExecutionsV3 {
  trades: StockPlusExecutionV3[];
}

export interface StockPlusHistoryExecutionsV3 {
  hasMore: boolean;
  trades: StockPlusExecutionV3[];
}

export interface StockPlusCashInfoV3 {
  withdrawCash: number | string;
  availableCash: number | string;
  frozenCash: number | string;
  settlingCash: number | string;
  currency: string;
}

export interface StockPlusFrozenTransactionFeeV3 {
  currency?: string;
  amount?: number | string;
  [key: string]: unknown;
}

export interface StockPlusAccountItemV3 {
  totalCash: number | string;
  maxFinanceAmount: number | string;
  remainingFinanceAmount: number | string;
  riskLevel: number | string;
  marginCall: number | string;
  netAssets: number | string;
  initMargin: number | string;
  maintenanceMargin: number | string;
  currency: string;
  buyPower: number | string;
  cashInfos: StockPlusCashInfoV3[];
  frozenTransactionFees: StockPlusFrozenTransactionFeeV3[];
}

export interface StockPlusAccountV3 {
  list: StockPlusAccountItemV3[];
}

export interface StockPlusCashFlowItemV3 {
  transactionFlowName: string;
  direction: string;
  businessType: string;
  balance: number | string;
  currency: string;
  businessTime: string;
  symbol: string | null;
  description: string;
}

export interface StockPlusCashFlowV3 {
  list: StockPlusCashFlowItemV3[];
}

export interface StockPlusPositionItemV3 {
  symbol: string;
  symbolName: string;
  quantity: number | string;
  availableQuantity: number | string;
  currency: string;
  costPrice: number | string;
  market: string;
  initQuantity: number | string;
}

export interface StockPlusPositionChannelV3 {
  accountChannel: string;
  positions: StockPlusPositionItemV3[];
}

export interface StockPlusStockPositionV3 {
  channels: StockPlusPositionChannelV3[];
}

export interface StockPlusTransferResponseV3 {
  transferId: string;
}

export interface StockPlusTransferRecordsV3 {
  transferId: string;
  coin: string;
  amount: string;
  direction: string;
  cursor: string;
}
