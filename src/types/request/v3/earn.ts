/**
 *
 *
 * Earn | On-Chain Elite (UTA)
 *
 *
 */

export interface GetEarnEliteRecordsRequestV3 {
  type: 'subscribe' | 'redeem' | 'interest';
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}

export interface GetEarnEliteSubscribeInfoRequestV3 {
  productId: string;
}

export interface EarnEliteSubscribeRequestV3 {
  productSubId: string;
  amount: string;
  coin?: string;
  paymentAccount?: 'spot' | 'unified';
}

export interface GetEarnEliteSubscribeResultRequestV3 {
  orderId: string;
}

export interface GetEarnEliteRedeemInfoRequestV3 {
  productId: string;
}

export interface RedeemEarnEliteRequestV3 {
  productId: string;
  productSubId: string;
  redeemType: 'fast' | 'standard';
  amount: string;
  receiveAccount: 'spot' | 'unified';
  advancedSettle?: 'yes' | 'no';
  coin?: string;
}

/**
 *
 *
 * Earn | Cash+ (UTA)
 * Master and sub-accounts can call these.
 *
 *
 */

export type EarnCashPlusRecordTypeV3 =
  | 'subscribe'
  | 'redeem'
  | 'compound_interest'
  | 'liquidation_redeem';

export interface EarnCashPlusSubscribeRequestV3 {
  /** From subscribe-info */
  productSubId: string;
  /** Subscription amount, in the subscription coin */
  amount: string;
  /**
   * Debit account. funding (default), uta, or otc.
   * Comma-separated when more than one, e.g. funding,uta.
   */
  accountType?: string;
  /** Prevents a duplicate submit of the same subscription */
  idempotentNo?: string;
}

export interface GetEarnCashPlusSubscribeResultRequestV3 {
  orderId: string;
}

export interface EarnCashPlusRedeemRequestV3 {
  productSubId: string;
  /** Amount of Cash+ to redeem */
  amount: string;
  /** Credit account. funding (default) or uta */
  accountType?: 'funding' | 'uta';
}

export interface GetEarnCashPlusRedeemResultRequestV3 {
  orderId: string;
}

export interface GetEarnCashPlusHistoryOrdersRequestV3 {
  startTime?: string;
  endTime?: string;
  recordType?: EarnCashPlusRecordTypeV3;
  /** Default 20, max 100 */
  limit?: string;
  /** Pass nextCursor from the previous page. Omit on the first page */
  cursor?: string;
}
