export interface ApiErrorScheme<C = string> {
  code: C;
  message: string;
  detail?: string;
}
