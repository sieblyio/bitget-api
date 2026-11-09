export interface CreateBrokerSubAccountRequestV3 {
  subaccountName: string;
  label: string;
}

export interface GetBrokerSubAccountListRequestV3 {
  limit?: string;
  cursor?: string;
  status?: 'normal' | 'freeze';
}

export interface ModifyBrokerSubAccountRequestV3 {
  subUid: string;
  status?: 'normal' | 'freeze';
  permList?: string[];
}

export interface BrokerSubWithdrawalRequestV3 {
  subUid: string;
  coin: string;
  dest: 'on_chain' | 'internal_transfer';
  address: string;
  amount: string;
  chain?: string;
  tag?: string;
  clientOid?: string;
}

export interface GetBrokerSubDepositAddressRequestV3 {
  subUid: string;
  coin: string;
  chain?: string;
}

export interface GetBrokerAllSubDepositWithdrawalRequestV3 {
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
  status?: 'pending' | 'fail' | 'success';
}

export interface GetBrokerCommissionRequestV3 {
  startTime?: string;
  endTime?: string;
  pageSize?: string;
  pageNo?: string;
  bizType?: 'spot' | 'futures';
  subBizType?:
    | 'spot_trade'
    | 'spot_margin'
    | 'usdt_futures'
    | 'usdc_futures'
    | 'coin_futures';
}

export interface CreateBrokerSubApiKeyRequestV3 {
  subUid: string;
  passphrase: string;
  label: string;
  ipList?: string[];
  permType: 'read_write' | 'read_only';
  permList: string[];
}

export interface ModifyBrokerSubApiKeyRequestV3 {
  subUid: string;
  passphrase: string;
  apiKey: string;
  label?: string;
  ipList?: string[];
  permType?: 'read_write' | 'read_only';
  permList?: string[];
}

export interface DeleteBrokerSubApiKeyRequestV3 {
  subUid: string;
  apiKey: string;
}

export interface GetBrokerSubApiKeyRequestV3 {
  subUid: string;
}

/**
 *
 *
 * Broker | Email and Commissions
 *
 *
 */

export interface ModifySubaccountEmailRequestV3 {
  subUid: string;
  subaccountEmail: string;
}

export interface GetSubaccountEmailRequestV3 {
  subUid: string;
}

export interface GetBrokerTradeVolumeRequestV3 {
  startTime?: string;
  endTime?: string;
  pageSize?: string;
  pageNo?: string;
}

export interface GetBrokerTotalCommissionRequestV3 {
  startTime?: string;
  endTime?: string;
}

export interface GetBrokerOrderCommissionRequestV3 {
  startTime?: string;
  endTime?: string;
  limit?: string;
  uid?: string;
  orderid?: string;
  /** Pass endId from the previous response. Omit on the first page. */
  idLessThan?: string;
}

export interface GetBrokerRebateInfoRequestV3 {
  uid: string;
}
