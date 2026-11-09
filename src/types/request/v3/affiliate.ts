/**
 *
 *
 * Affiliate
 *
 *
 */

export interface AgentCustomerListRequestV3 {
  startTime?: string;
  endTime?: string;
  pageNo?: string;
  pageSize?: string;
  uid?: string;
  referralCode?: string;
}

export interface AgentCustomerAssetRequestV3 {
  pageNo?: string;
  pageSize?: string;
  uid?: string;
  showSub?: 'yes' | 'no';
}

export interface AgentCustomerTradeVolumeRequestV3 {
  startTime?: string;
  endTime?: string;
  pageNo?: string;
  pageSize?: string;
  uid?: string;
  showSub?: 'yes' | 'no';
}

export interface AgentCustomerDepositRequestV3 {
  startTime?: string;
  endTime?: string;
  pageNo?: string;
  pageSize?: string;
  uid?: string;
  showSub?: 'yes' | 'no';
}

export interface GetAgentCustomerKycResultRequestV3 {
  startTime?: string;
  endTime?: string;
  /** Pass endId from the previous response. Omit on the first page. */
  cursor?: string;
  limit?: string;
  uid?: string;
  showSub?: 'yes' | 'no';
}

export interface GetAgentCustomerCommissionsRequestV3 {
  startTime?: string;
  endTime?: string;
  /** Pass endId from the previous response. Omit on the first page. */
  cursor?: string;
  limit?: string;
  uid?: string;
  coin?: string;
  symbol?: string;
  showSub?: 'yes' | 'no';
}

export interface GetAgentSubCustomerListRequestV3 {
  startTime?: string;
  endTime?: string;
  /** Pass minId from the previous response. Omit on the first page. */
  cursor?: string;
  limit?: string;
  uid?: string;
  showSub?: 'yes' | 'no';
}

export interface GetSubAffiliateInfoRequestV3 {
  uid?: string;
  startTime?: string;
  endTime?: string;
  /** Pass endId from the previous response. Omit on the first page. */
  idLessThan?: string;
  limit?: string;
  includeDownLine?: 'yes' | 'no';
}

export interface GetSubAffiliateCommissionRequestV3 {
  startTime?: string;
  endTime?: string;
  limit?: string;
  /** Pass endId from the previous response. Omit on the first page. */
  cursor?: string;
}
