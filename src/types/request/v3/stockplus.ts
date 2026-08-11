/**
 *
 *
 * Stock+ (UTA)
 *
 *
 */

export interface GetStockPlusOptionQuoteRequestV3 {
  symbol: string;
}

export interface GetStockPlusOptionChainInfoRequestV3 {
  symbol: string;
  expiryDate: string;
}

export interface GetStockPlusOptionExpiryDateRequestV3 {
  symbol: string;
}

export interface GetStockPlusOptionVolumeRequestV3 {
  symbol: string;
}

export interface GetStockPlusStaticInfoRequestV3 {
  symbol: string;
}

export interface GetStockPlusQuoteRequestV3 {
  symbol: string;
}

export interface GetStockPlusTradeDetailRequestV3 {
  symbol: string;
  count?: string;
}

export interface GetStockPlusIntradayRequestV3 {
  symbol: string;
}

export interface GetStockPlusHistoryCandlestickRequestV3 {
  symbol: string;
  period: string;
  count?: string;
  adjustType?: string;
  forward?: boolean;
  time?: string;
  tradeSessions?: string;
}

export interface GetStockPlusCandlestickRequestV3 {
  symbol: string;
  period: string;
  count?: string;
  adjustType?: string;
  tradeSessions?: string;
}

export interface GetStockPlusDepthRequestV3 {
  symbol: string;
}

export interface PlaceStockPlusOrderRequestV3 {
  symbol: string;
  orderType: 'LO' | 'MO' | 'LIT' | 'MIT' | 'TSLPAMT' | 'TSLPPCT';
  side: 'Buy' | 'Sell';
  submittedQuantity: string;
  timeInForce: 'Day' | 'GoodTilCanceled' | 'GoodTilDate';
  submittedPrice?: string;
  triggerPrice?: string;
  limitOffset?: string;
  trailingAmount?: string;
  trailingPercent?: string;
  expireDate?: string;
  outsideRth?: 'RTHOnly' | 'AnyTime' | 'Overnight';
  limitDepthLevel?: number;
  triggerCount?: number;
  monitorPrice?: string;
  remark?: string;
}

export interface CancelStockPlusOrderRequestV3 {
  symbol: string;
  orderId?: string;
  clientOid?: string;
}

export interface ModifyStockPlusOrderRequestV3 {
  orderId: string;
  quantity: string;
  price?: string;
  triggerPrice?: string;
  limitOffset?: string;
  trailingAmount?: string;
  trailingPercent?: string;
  limitDepthLevel?: number;
  triggerCount?: number;
  monitorPrice?: string;
  remark?: string;
}

export interface GetStockPlusTodayOrdersRequestV3 {
  symbol?: string;
  status?: string | string[];
  side?: string;
  market?: string;
  orderId?: string;
}

export interface GetStockPlusHistoryOrdersRequestV3 {
  symbol?: string;
  status?: string | string[];
  side?: string;
  market?: string;
  startAt?: string;
  endAt?: string;
}

export interface GetStockPlusOrderDetailRequestV3 {
  orderId: string;
}

export interface GetStockPlusTodayExecutionsRequestV3 {
  symbol?: string;
  orderId?: string;
}

export interface GetStockPlusHistoryExecutionsRequestV3 {
  symbol?: string;
  startAt?: string;
  endAt?: string;
}

export interface GetStockPlusAccountRequestV3 {
  currency?: string;
}

export interface GetStockPlusCashFlowRequestV3 {
  startTime: string;
  endTime: string;
  businessType?: string;
  symbol?: string;
  page?: string;
  size?: string;
}

export interface GetStockPlusStockPositionRequestV3 {
  symbol?: string;
}

export interface StockPlusTransferRequestV3 {
  coin?: string;
  amount?: string;
  direction?: 'in' | 'out';
}

export interface GetStockPlusTransferRecordsRequestV3 {
  transferId?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}
