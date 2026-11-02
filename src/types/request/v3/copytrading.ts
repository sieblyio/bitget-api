export interface GetCopyFuturesMaxTransferableRequestV3 {
  coin: string;
}

export interface GetCopyFuturesCopyMaxTransferableRequestV3 {
  projectId: string;
  /** e.g. USDT */
  coin: string;
}

export interface CopyFuturesTransferRequestV3 {
  type: 'in' | 'out';
  coin: string;
  amount: string;
  /** Source account type(s) for transfer-in. Comma-separated: funding, uta, otc */
  inAccountType?: string;
}

export interface GetCopyFuturesTransferRecordRequestV3 {
  startTime?: string;
  endTime?: string;
  limit?: string;
  /** Pass transferId from the previous page to paginate forward */
  cursor?: string;
}

export interface GetCopyFuturesFollowersRequestV3 {
  limit?: string;
  cursor?: string;
}

export interface GetCopyFuturesProfitDetailsRequestV3 {
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}

export type CopyFuturesCopyTypeV3 = 'fixed_ratio' | 'fixed_margin';

export interface GetCopyFuturesPortfolioOverviewRequestV3 {
  period: '7D' | '30D' | '90D' | '180D';
}

export interface CreateCopyFuturesRequestV3 {
  projectId: string;
  type: CopyFuturesCopyTypeV3;
  amount: string;
  /** Comma-separated: funding, uta, otc */
  accountType?: string;
  /** Comma-separated symbols. Omit to copy every pair */
  tradingPairList?: string;
  /** Required when type is fixed_margin */
  marginPerOrder?: string;
  autoCopy?: 'on' | 'off';
  leverage?: string;
  maxEntrySlippage?: string;
  maxMarginRatio?: string;
  /** API field name (Bitget spelling). */
  maxPostionValue?: string;
}

export interface ModifyCopyFuturesFollowerSettingsRequestV3 {
  projectId: string;
  /** Pass all to follow every pair */
  tradingPairList?: string;
  marginPerOrder?: string;
  autoCopy?: 'on' | 'off';
  leverage?: string;
  maxEntrySlippage?: string;
  maxMarginRatio?: string;
  /** API field name (Bitget spelling). */
  maxPostionValue?: string;
}

export interface UnfollowCopyFuturesRequestV3 {
  projectId: string;
  closeType?: 'follow_close' | 'instant_close';
}

export interface GetCopyFuturesCopySettingsRequestV3 {
  projectId: string;
}

export interface CopyFuturesFollowerTransferRequestV3 {
  projectId: string;
  type: 'in' | 'out';
  coin: string;
  amount: string;
  /** Comma-separated: funding, uta, otc */
  inAccountType?: string;
}

export interface GetCopyFuturesFollowerTransferRecordRequestV3 {
  projectId: string;
  limit?: string;
  cursor?: string;
}

export interface GetCopyFuturesCurrentCopyRequestV3 {
  projectId: string;
}

export interface GetCopyFuturesCopyProfitDetailsRequestV3 {
  projectId: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}

export interface CloseCopyFuturesPositionsRequestV3 {
  projectId: string;
  symbol: string;
  qty: string;
  holdSide: 'long' | 'short';
}

export interface CloseAllCopyFuturesRequestV3 {
  projectId: string;
}

export interface GetCopyFuturesCurrentPositionsRequestV3 {
  projectId: string;
  symbol?: string;
  posSide?: 'long' | 'short';
}

export interface PlaceCopyFuturesTpSlRequestV3 {
  projectId: string;
  positionId: string;
  tpTriggerBy: 'market' | 'mark';
  slTriggerBy: 'market' | 'mark';
  takeProfit: string;
  stopLoss: string;
}

export interface ModifyCopyFuturesTpSlRequestV3 {
  projectId: string;
  strategyId: string;
  tpTriggerBy: 'market' | 'mark';
  slTriggerBy: 'market' | 'mark';
  takeProfit: string;
  stopLoss: string;
}

export interface CancelCopyFuturesTpSlRequestV3 {
  projectId: string;
  strategyId: string;
}

export interface GetCopyFuturesCurrentTpSlOrdersRequestV3 {
  projectId: string;
}

export interface GetCopyFuturesTpSlOrderHistoryRequestV3 {
  projectId: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}
