import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Bankuser } from './bankuser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl="http://localhost:7009/admin/signup";
  
  constructor(private httpClient:HttpClient){ }

  registerUser(bankuser:Bankuser):Observable<Object>{
    console.log(bankuser);
    return this.httpClient.post(`${this.baseUrl}`,bankuser,{responseType:'text'});
  }
}
