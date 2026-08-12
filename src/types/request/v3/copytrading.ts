export interface GetCopyFuturesMaxTransferableRequestV3 {
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
