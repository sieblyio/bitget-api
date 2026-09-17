export interface GetPublicFillsRequestV3 {
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  symbol?: string;
  limit?: string;
}

export interface GetCandlesRequestV3 {
  category: 'SPOT' | 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol: string;
  interval:
    | '1m'
    | '3m'
    | '5m'
    | '15m'
    | '30m'
    | '1H'
    | '4H'
    | '6H'
    | '12H'
    | '1D';
  startTime?: string;
  endTime?: string;
  type?: 'MARKET' | 'MARK' | 'INDEX';
  limit?: string;
}

export interface GetHistoryCandlesRequestV3 {
  category: 'SPOT' | 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol: string;
  interval:
    | '1m'
    | '3m'
    | '5m'
    | '15m'
    | '30m'
    | '1H'
    | '4H'
    | '6H'
    | '12H'
    | '1D';
  startTime?: string;
  endTime?: string;
  type?: 'MARKET' | 'MARK' | 'INDEX';
  limit?: string;
}

export interface GetContractsOiRequestV3 {
  symbol?: string;
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
}

export interface GetCurrentFundingRateRequestV3 {
  category?: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol?: string;
}

export interface GetLiquidationsRequestV3 {
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol?: string;
  limit?: string;
  cursor?: string;
}

export interface GetHistoryFundingRateRequestV3 {
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol: string;
  cursor?: string;
  limit?: string;
}

export interface GetMarginLoansRequestV3 {
  coin: string;
  /** User level. Default: vip0 */
  level?:
    | 'vip0'
    | 'vip1'
    | 'vip2'
    | 'vip3'
    | 'vip4'
    | 'vip5'
    | 'vip6'
    | 'vip7'
    | 'pro1'
    | 'pro2'
    | 'pro3'
    | 'pro4'
    | 'pro5'
    | 'pro6';
}

export interface GetSplitRecordsRequestV3 {
  symbol?: string;
}

export interface GetOpenInterestRequestV3 {
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol?: string;
}

export interface GetPositionTierRequestV3 {
  category: 'MARGIN' | 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol?: string;
  coin?: string;
}

export interface GetRiskReserveRequestV3 {
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol: string;
  marginCoin?: string;
}

export interface GetRiskReserveAllRequestV3 {
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
}

export interface GetInstrumentsRequestV3 {
  category:
    | 'SPOT'
    | 'MARGIN'
    | 'USDT-FUTURES'
    | 'COIN-FUTURES'
    | 'USDC-FUTURES';
  symbol?: string;
}

export interface GetMarketFeeGroupRequestV3 {
  category: 'SPOT' | 'FUTURES';
  group?: 'DEFAULT' | 'GROUP_A' | 'GROUP_B' | 'GROUP_C';
}

export interface GetMarketScoreWeightsRequestV3 {
  category?: 'SPOT' | 'FUTURES';
}

export interface GetOrderBookRequestV3 {
  category: 'SPOT' | 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol: string;
  limit?: string;
}

export interface GetTickersRequestV3 {
  category: 'SPOT' | 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol?: string;
}

export interface GetIndexComponentsRequestV3 {
  symbol: string;
}

export interface GetRpiOrderBookRequestV3 {
  category: 'SPOT' | 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol: string;
  limit?: string;
}

export interface GetCashDividendRecordsRequestV3 {
  symbol: string;
  type: 'pending' | 'paid';
  cursor?: string;
  limit?: string;
}

export interface GetSpotWhaleFlowRequestV3 {
  symbol: string;
}

export interface GetSpotFundFlowRequestV3 {
  symbol: string;
  period?: string;
}

export interface GetSpotNetFlowRequestV3 {
  symbol: string;
}

export interface GetMarginLongShortRequestV3 {
  symbol: string;
  period?: '24h' | '30d';
  coin?: string;
}

export interface GetMarginLoanGrowthRequestV3 {
  symbol: string;
  period?: string;
  coin?: string;
}

export interface GetMarginIsolatedBorrowRequestV3 {
  symbol: string;
  period?: string;
}

export interface GetFuturesTradingDataRequestV3 {
  symbol: string;
  period?: string;
}
