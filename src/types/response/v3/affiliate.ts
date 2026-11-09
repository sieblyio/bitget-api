/**
 *
 *
 * Affiliate
 * https://www.bitget.com/docs/catalog/affiliate/affiliate
 *
 *
 */

export interface AgentCustomerListItemV3 {
  uid: string;
  registerTime: string;
}

export interface AgentCustomerAssetItemV3 {
  uid: string;
  balance: string;
  uTime: string;
  remark: string;
}

export interface AgentCustomerTradeVolumeItemV3 {
  uid: string;
  /** API field name (Bitget spelling). */
  volumn: string;
  spotVolume: string;
  futuresVolume: string;
  time: string;
}

export interface AgentCustomerDepositItemV3 {
  uid: string;
  orderId: string;
  depositTime: string;
  depositCoin: string;
  depositAmount: string;
}

export interface AgentCustomerKycResultItemV3 {
  uid: string;
  kycResult: 'passed' | 'not_passed';
}

/** Pagination wrapper follows the documented response example. */
export interface AgentCustomerKycResultV3 {
  userList: AgentCustomerKycResultItemV3[];
  endId: string;
}

export interface AgentCustomerCommissionV3 {
  uid: string;
  date: string;
  coin: string;
  symbol: string;
  productType: string;
  dealAmount: string;
  fee: string;
  feeDeduction: string;
  activityBonusDeduct: string;
  spotCouponDeduct: string;
  futuresCouponDeduct: string;
  spotFeeDiscountDeduct: string;
  negativeMakerFeeDeduct: string;
  feePaid: string;
  rebateAmount: string;
  userTotalRebateAmount: string;
  dayTotalRebateAmount: string;
  totalRebateAmount: string;
}

export interface AgentCustomerCommissionsV3 {
  commissionList: AgentCustomerCommissionV3[];
  endId: string;
}

/** Pagination wrapper follows the documented response example. */
export interface AgentSubCustomerListV3 {
  list: AgentCustomerListItemV3[];
  minId: string;
}

export interface SubAffiliateRebateRateV3 {
  rebateType: string;
  rebateRate: string;
}

export interface SubAffiliateInfoItemV3 {
  uid: string;
  uplineName: string;
  rebateRateList: SubAffiliateRebateRateV3[];
  verificationStatus: string;
  directReferrals: string;
  subAffiliates: string;
  subAffiliateDirectReferrals: string;
  volume: string;
  deposit: string;
  transactionFee: string;
  rebate: string;
}

export interface SubAffiliateInfoV3 {
  list: SubAffiliateInfoItemV3[];
  endId: string;
}

export interface SubAffiliateCommissionItemV3 {
  uid: string;
  bizType: string;
  subBizType: string;
  symbol: string;
  coin: string;
  fee: string;
  volume: string;
  activityBonusDeduct: string;
  spotCouponDeduct: string;
  futuresCouponDeduct: string;
  spotFeeDiscountDeduct: string;
  negativeMakerFeeDeduct: string;
  feePaid: string;
  directCommission: string;
  subCommission: string;
  partnerCommission: string;
  partnerActualCommission: string;
  traderType: string;
  apiType: string;
  status: string;
  startCalculationTime: string;
  endCalculationTime: string;
}

export interface SubAffiliateCommissionV3 {
  commissionList: SubAffiliateCommissionItemV3[];
  endId: string;
}
