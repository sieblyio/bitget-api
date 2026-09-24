export interface GetRealityCompanyOverviewRequestV3 {
  code: string;
}

export interface GetRealityValuationIndicatorsRequestV3 {
  code: string;
}

export interface GetRealityEarningsForecastRequestV3 {
  code: string;
}

export interface GetRealitySuspensionResumptionInfoRequestV3 {
  code: string;
}

export interface GetRealityDividendsRequestV3 {
  code: string;
  limit?: string;
  cursor?: string;
}

export interface GetRealityShareCapitalChangeRequestV3 {
  code: string;
}

export interface GetRealityInnerTradesRequestV3 {
  code: string;
  limit?: string;
  cursor?: string;
}

export interface GetRealityExecutiveShareholdingsRequestV3 {
  code: string;
  limit?: string;
  cursor?: string;
}

export interface GetRealityShareholdDetailRequestV3 {
  code: string;
  limit?: string;
  cursor?: string;
}

export interface GetRealityStockInfoRequestV3 {
  symbol?: string;
}
