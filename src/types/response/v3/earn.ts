/**
 *
 *
 * Earn | On-Chain Elite (UTA)
 *
 *
 */

export interface EarnEliteSubscriptionCoinV3 {
  subscriptionCoin: string;
  precision: string;
  feeRate: string;
  exchangeRate: string;
  remainQuota?: string;
  minAmount?: string;
}

export interface EarnEliteProductV3 {
  productId: string;
  coin: string;
  minApr: string;
  maxApr: string;
  subscriptionCoinList: EarnEliteSubscriptionCoinV3[];
  sellOut: 'YES' | 'NO' | string;
}

export interface EarnEliteAssetProjectV3 {
  projectName: string;
}

export interface EarnEliteAssetV3 {
  productId: string;
  productCoin: string;
  holdingAmount: string;
  usdtHoldingAmount: string;
  exchangeRate: string;
  apr: string;
  minApy?: string;
  maxApy?: string;
  subscriptionCoin: string;
  exchangeAmount: string;
  projectList?: EarnEliteAssetProjectV3[];
  unsettledBGPoints: string;
  interestCoin: string;
  totalProfit: string;
}

export interface EarnEliteAssetsV3 {
  resultList: EarnEliteAssetV3[];
}

export interface EarnEliteRecordV3 {
  recordId: string;
  productId: string;
  coin: string;
  status: string;
  exchangeRate: string;
  receivedCoin: string;
  receivedAmount: string;
  investAmount: string;
  feeRate: string;
  redeemType?: string | string[];
  receivingAccount: string;
  actualReceivingAccount: string;
  paymentAccount?: string[];
  settlePoints: string;
  fee: string;
  /** Business time, Unix ms */
  bizTime?: string;
}

export interface EarnEliteRecordsV3 {
  recordList: EarnEliteRecordV3[];
  endId: string;
}

export interface EarnEliteSubscribeInfoV3 {
  productSubId: string;
  minAmount: string;
  remainQuota: string;
  exchangeRate: string;
  productCoin: string;
  interestTime: string;
  settleTime: string;
  precision: string;
  feeRate: string;
  subscriptionCoinList?: EarnEliteSubscriptionCoinV3[];
}

export interface EarnEliteSubscribeResultV3 {
  orderId: string;
}

export interface EarnEliteSubscribeStatusV3 {
  result: 'settled' | 'pending' | 'rejected' | string;
}

export interface EarnEliteRedeemInfoBgusdReceiveCoinV3 {
  bgusdReceiveCoin: string;
  bgusdExchangeRate: string;
}

export interface EarnEliteRedeemModeV3 {
  redeemFeeRate: string;
  remainQuota: string;
  redeemType: 'fast' | 'standard' | string;
  redeemScale: string;
  redeemDelayDate: string;
  minRedeemAmount: string;
  redeemTime: string;
}

export interface EarnEliteRedeemInfoV3 {
  productId: string;
  productSubId: string;
  productCoin: string;
  subscriptionCoin: string;
  profitCoin: string;
  exchangeRate: string;
  totalUnPayInterestAmount: string;
  preSettleApr: string;
  receivedCoin: string;
  unsettledPoints: string;
  bgusdReceiveCoinList: EarnEliteRedeemInfoBgusdReceiveCoinV3[];
  redeemModeList: EarnEliteRedeemModeV3[];
}

export interface RedeemEarnEliteResultV3 {
  orderId: string;
}

/**
 *
 *
 * Earn | Cash+ (UTA)
 *
 *
 */

export interface EarnCashPlusSubscribeCoinV3 {
  /** Used for subscribe and redeem */
  productSubId: string;
  coin: string;
  /** Minimum subscription amount, in this coin */
  minAmount: string;
  /** How much Cash+ 1 unit of this coin converts into. Default 1 */
  conversionRate: string;
  /** Decimal places for the subscription amount */
  subscribeScale: string;
  /** Decimal places for profit */
  profitScale: string;
  soldOut: 'yes' | 'no';
}

export interface EarnCashPlusSubscribeInfoV3 {
  /** Profit source coin. Currently USDGO */
  profitSourceCoin: string;
  /** Decimal APR. 0.04 means 4% */
  cashPlusApr: string;
  subscribeCoinList: EarnCashPlusSubscribeCoinV3[];
  /** Unix ms */
  interestTime: string;
  /** Unix ms */
  payInterestTime: string;
  /** Unix ms */
  subscribeTime: string;
}

export interface EarnCashPlusSubscribeResultV3 {
  orderId: string;
}

export type EarnCashPlusOrderStatusV3 = 'processing' | 'success' | 'failed';

export type EarnCashPlusAccountTypeV3 = 'funding' | 'uta' | 'otc';

export interface EarnCashPlusPaymentAccountV3 {
  accountType: EarnCashPlusAccountTypeV3;
  payAmount: string;
}

export interface EarnCashPlusSubscribeStatusV3 {
  orderId: string;
  status: EarnCashPlusOrderStatusV3;
  coin: string;
  amount: string;
  /** Unix ms */
  subscribeTime: string;
  /** Unix ms */
  interestTime: string;
  /** First interest distribution, Unix ms */
  dividendTime: string;
  paymentAccountList: EarnCashPlusPaymentAccountV3[];
}

export interface EarnCashPlusRedeemCoinV3 {
  productSubId: string;
  coin: string;
  /** How much of this coin 1 unit of Cash+ equals */
  conversionRate: string;
  /** Redeemable Cash+ position */
  redeemAvailable: string;
  redeemMinAmount: string;
  /** Decimal places for the redemption amount */
  redeemScale: string;
  /** Unlock request time, Unix ms */
  redeemTime: string;
  /** Estimated arrival, Unix ms */
  receivedTime: string;
}

export interface EarnCashPlusRedeemInfoV3 {
  redeemCoinList: EarnCashPlusRedeemCoinV3[];
  /** Remaining redemption quota for today */
  userRemainingQuota: string;
}

export interface EarnCashPlusRedeemResultV3 {
  orderId: string;
  /** Unix ms */
  redeemTime: number;
  /** Estimated arrival, Unix ms */
  receiveTime: number;
}

export interface EarnCashPlusRedeemStatusV3 {
  orderId: string;
  status: EarnCashPlusOrderStatusV3;
  /** Unix ms */
  redeemTime: string;
  /** Estimated arrival, Unix ms */
  receiveTime: string;
}

export interface EarnCashPlusPositionV3 {
  /** Holding, converted to USD */
  balance: string;
  /** Cumulative profit, converted to USD */
  totalProfit: string;
  /** Yesterday's profit, converted to USD */
  yesterdayProfit: string;
  /** Compound annual rate, for reference */
  apr: string;
}

export interface EarnCashPlusHistoryOrderV3 {
  recordId: string;
  recordType:
    | 'subscribe'
    | 'redeem'
    | 'compound_interest'
    | 'liquidation_redeem';
  status: EarnCashPlusOrderStatusV3;
  amount: string;
  coin: string;
  /** Unix ms */
  createdTime: number;
  /**
   * Debit account on a subscription.
   * Credit account on interest or redemption.
   */
  accountType: EarnCashPlusAccountTypeV3;
}

export interface EarnCashPlusHistoryOrdersV3 {
  items: EarnCashPlusHistoryOrderV3[];
  /** Pass back as cursor. Absent on the last page */
  nextCursor?: string;
}
