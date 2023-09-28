import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url ='https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient, private message: NzMessageService) { }

  public getTaskList(){
    return this.http.get(this.url);
}
}
