import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentModel } from 'src/app/Student/Student.Models';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private serverClient: HttpClient) {}
  private readonly Base_URL = 'http://127.0.0.1:7005/';

  Post(httpEndPoint: string, model: StudentModel.StudentReqModel) {
    const httpEndPointUrl = this.Base_URL + httpEndPoint;
    // return this.serverClient.post(httpEndPointUrl, model);
  }
}
