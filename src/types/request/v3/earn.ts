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

/**
 *
 *
 * Earn | Savings (UTA)
 *
 *
 */

export interface GetEarnSavingsProductsRequestV3 {
  coin?: string;
  filter?: 'available' | 'held' | 'available_and_held' | 'all';
}

export interface GetEarnSavingsAssetsRequestV3 {
  periodType: 'flexible' | 'fixed';
  startTime?: string;
  endTime?: string;
  limit?: string;
  /** Pass endId from the previous response. Omit on the first page. */
  cursor?: string;
}

export interface GetEarnSavingsRecordsRequestV3 {
  coin?: string;
  periodType: 'flexible' | 'fixed';
  orderType?: 'subscribe' | 'redeem' | 'pay_interest' | 'deduction';
  startTime?: string;
  endTime?: string;
  limit?: string;
  /** Pass endId from the previous response. Omit on the first page. */
  cursor?: string;
}

export interface GetEarnSavingsSubscriptionRequestV3 {
  productId: string;
  periodType: 'flexible' | 'fixed';
}

export interface SubscribeSavingsRequestV3 {
  productId: string;
  periodType: 'flexible' | 'fixed';
  amount: string;
}

export interface GetEarnSavingsSubscriptionResultRequestV3 {
  orderId: string;
  periodType: 'flexible' | 'fixed';
}

export interface RedeemSavingsRequestV3 {
  productId: string;
  /** Assets order ID returned by getEarnSavingsAssets */
  orderId?: string;
  periodType: 'flexible' | 'fixed';
  amount: string;
}

export interface GetEarnSavingsRedemptionResultRequestV3 {
  orderId: string;
  periodType: 'flexible' | 'fixed';
}

/**
 *
 *
 * Earn | SharkFin (UTA)
 *
 *
 */

export interface GetSharkfinProductsRequestV3 {
  coin: string;
  limit?: string;
  /** Pass endId from the previous response. Omit on the first page. */
  cursor?: string;
}

export interface GetSharkfinAssetsRequestV3 {
  status: 'subscribed' | 'settled';
  startTime?: string;
  endTime?: string;
  limit?: string;
  /** Pass endId from the previous response. Omit on the first page. */
  cursor?: string;
}

export interface GetSharkfinRecordsRequestV3 {
  coin?: string;
  type: 'subscription' | 'redemption' | 'interest';
  startTime?: string;
  endTime?: string;
  limit?: string;
  /** Pass endId from the previous response. Omit on the first page. */
  cursor?: string;
}

export interface GetSharkfinSubscriptionRequestV3 {
  productId: string;
}

export interface SubscribeSharkfinRequestV3 {
  productId: string;
  amount: string;
}

export interface GetSharkfinSubscriptionResultRequestV3 {
  orderId: string;
}
