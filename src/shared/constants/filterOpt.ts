export interface ICountry {
  iso_3166_1: string;
  english_name: string;
  native_name: string;
}

export interface IRegion {
  iso_3166_1: string;
  english_name: string;
  native_name: string;
}

export interface IRegionResponse {
  results: IRegion[];
}

export interface IProviderResponse {
  results: IProvider[];
}

export interface IProvider {
  display_priorities: IDisplayPriorities;
  display_priority: number;
  logo_path: string;
  provider_name: string;
  provider_id: number;
}

export interface IDisplayPriorities {
  AG?: number;
  AE?: number;
  AL?: number;
  AO?: number;
  AZ: number;
  AR: number;
  AT: number;
  AU: number;
  BF?: number;
  BB?: number;
  BG?: number;
  BE: number;
  BH?: number;
  BM?: number;
  BO: number;
  BY: number;
  BZ: number;
  BS?: number;
  BR: number;
  CI?: number;
  CH: number;
  CM?: number;
  CA: number;
  CL: number;
  CO: number;
  CR: number;
  CU?: number;
  CY: number;
  CV?: number;
  CZ: number;
  DO?: number;
  DK: number;
  DZ?: number;
  EC: number;
  DE: number;
  EE: number;
  EG?: number;
  FI: number;
  ES: number;
  FJ?: number;
  FR: number;
  GG?: number;
  GF?: number;
  GH?: number;
  GB: number;
  GI?: number;
  GQ?: number;
  GR: number;
  GY?: number;
  GT: number;
  HN: number;
  HK: number;
  HU: number;
  HR?: number;
  ID: number;
  IE: number;
  IN: number;
  IQ?: number;
  IS?: number;
  IT: number;
  JM?: number;
  JP?: number;
  JO?: number;
  KE?: number;
  KR: number;
  LC?: number;
  KW?: number;
  LB?: number;
  LI?: number;
  LU: number;
  LT: number;
  LV: number;
  MA?: number;
  LY?: number;
  MC?: number;
  ME?: number;
  MG?: number;
  ML?: number;
  MD?: number;
  MU?: number;
  MW?: number;
  MK?: number;
  MZ?: number;
  MY: number;
  NE?: number;
  MX: number;
  NI: number;
  NG?: number;
  NL: number;
  NZ: number;
  NO: number;
  OM?: number;
  PA?: number;
  PE: number;
  PG?: number;
  PK?: number;
  PF?: number;
  PL: number;
  PH: number;
  PS?: number;
  PT: number;
  PY: number;
  RO?: number;
  QA?: number;
  RS?: number;
  RU?: number;
  SA?: number;
  SC?: number;
  SN?: number;
  SG: number;
  SE: number;
  SV?: number;
  TC?: number;
  SM?: number;
  SK: number;
  TD?: number;
  TH: number;
  TT?: number;
  TN?: number;
  TR?: number;
  UA: number;
  TZ?: number;
  TW: number;
  UG?: number;
  UY?: number;
  VE: number;
  YE?: number;
  ZM?: number;
  ZW?: number;
  ZA: number;
  US: number;
  AD?: number;
  BA?: number;
  IL?: number;
  MT?: number;
  SI?: number;
  CD?: number;
  XK?: number;
  VA?: number;
}
