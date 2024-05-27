export class DataResponse {
  actionStatus: string;
  appStatusCode: string;
  body: any;

  failed() {
    return this.actionStatus === 'FAILED';
  }

  success() {
    return this.actionStatus === 'SUCCESS';
  }
}
