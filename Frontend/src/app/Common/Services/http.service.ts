import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentModels } from 'src/app/Student/Student.Models';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private serverClient: HttpClient) {}
  private readonly Base_URL = 'http://127.0.0.1:7005/';

  GetAll(httpEndPoint: string) {
    const httpEndPointUrl = this.Base_URL + httpEndPoint;
    return this.serverClient.get(httpEndPointUrl);
  }
  Post(httpEndPoint: string, model: StudentModels.StudentReqModel) {
    const httpEndPointUrl = this.Base_URL + httpEndPoint;
    return this.serverClient.post(httpEndPointUrl, model);
  }
  Put(httpEndPoint: string, model: StudentModels.StudentReqModel) {
    const httpEndPointUrl = this.Base_URL + httpEndPoint;
    return this.serverClient.put(httpEndPointUrl, model);
  }
  Delete(httpEndPoint: string) {
    const httpEndPointUrl = this.Base_URL + httpEndPoint;
    return this.serverClient.delete(httpEndPointUrl);
  }
}
