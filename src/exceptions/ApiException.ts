import { ApiErrorScheme } from '@/models/api';

class ApiException<ErrorCode = string> extends Error {
  declare code: ErrorCode;

  declare detail?: string;

  constructor(data: ApiErrorScheme<ErrorCode>) {
    super(data.message);
    this.name = 'ApiException';
    this.code = data.code;
    this.detail = data.detail;
  }
}

export default ApiException;
