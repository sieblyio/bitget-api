export type CfdYesNoV3 = 'yes' | 'no';

export type CfdOrderTypeV3 = 'limit' | 'market';

export type CfdSideV3 = 'buy' | 'sell';

export type CfdKlineIntervalV3 = '1m' | '15m' | '1h' | '4h' | '1d';

export type CfdTransferAccountTypeV3 = 'funding' | 'uta';

export type CfdTransferDirectionV3 = 'in' | 'out';

export interface GetCfdTickersRequestV3 {
  symbol?: string;
}

export interface GetCfdHistoryCandlestickRequestV3 {
  symbol: string;
  interval: CfdKlineIntervalV3;
  side?: CfdSideV3;
  startTime?: string;
  endTime?: string;
  limit?: string;
}

export interface PlaceCfdOrderRequestV3 {
  symbol: string;
  orderType: CfdOrderTypeV3;
  side: CfdSideV3;
  qty: string;
  price?: string;
  takeProfit?: string;
  stopLoss?: string;
}

export interface ModifyCfdOrderRequestV3 {
  orderId: string;
  price?: string;
  takeProfit?: string;
  stopLoss?: string;
}

export interface CancelCfdOrderRequestV3 {
  orderId: string;
}

export interface CancelAllCfdOrdersRequestV3 {
  symbol?: string;
}

export interface CloseCfdPositionsRequestV3 {
  positionId: string;
  qty: string;
}

export interface CloseAllCfdPositionsRequestV3 {
  symbol?: string;
}

export interface GetCfdUnfilledOrdersRequestV3 {
  symbol?: string;
  subUid?: string;
}

export interface GetCfdOrderHistoryRequestV3 {
  symbol: string;
  subUid?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
}

export interface GetCfdCurrentPositionsRequestV3 {
  symbol?: string;
  subUid?: string;
}

export interface CfdTransferRequestV3 {
  coin: string;
  amount: string;
  accountType: CfdTransferAccountTypeV3;
  direction: CfdTransferDirectionV3;
}

export interface GetCfdTransferRecordsRequestV3 {
  transferId?: string;
  subUid?: string;
  startTime?: string;
  endTime?: string;
  direction?: CfdTransferDirectionV3;
  limit?: string;
}

export interface GetCfdFinancialRecordsRequestV3 {
  type?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
}

export interface GetCfdInstrumentsRequestV3 {
  symbol?: string;
}
