export interface ResponseApi<Data> {
  message: string;
  data?: Data;
  success: boolean;
}
