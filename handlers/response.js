import { Status } from '../constants/constant.js';

export class BaseResponseModel {
  constructor() {
    this.msg = Status[Status.SUCCESS];
    this.code = Status.SUCCESS;
  }

  getSuccessResponse(records) {
    this.msg = 'SUCCESS';
    this.code = Status.SUCCESS;
    this.records = records;
    console.log(this);
    return this;
  }

  getErrorResponse(records) {
    this.msg = 'ERROR';
    this.code = Status.ERROR;
    this.records = records;
    return this;
  }
}
