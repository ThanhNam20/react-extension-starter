import { ResponseApi } from './utils';

export type ExtensionConfig = ResponseApi<{
  multiply_factor_overlay: number;
  percent_cashback_default_overlay: string;
  cashback_exclusion: string;
  paging_size_coupon: number;
  max_percent_without_multiply: number;
  is_cashback_db: number;
}>;
