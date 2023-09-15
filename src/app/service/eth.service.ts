import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EthInterface } from '../interface/eth.interface';

@Injectable({
  providedIn: 'root'
})
export class EthService {

  constructor(
    private http: HttpClient
  ) { }

  url = "https://127.0.0.1:8000/api/eth/";

  urlAdd = "https://127.0.0.1:8000/api/eth/new";

  getEth(): Observable<EthInterface[]>{
    return this.http.get<EthInterface[]>(this.url);
  }

  deleteEth(id:number): Observable<EthInterface>{
    return this.http.delete<EthInterface>(this.url+id);
  }

  addEth(eth: EthInterface): Observable<EthInterface>{
    const headers = { 'content-type': 'application/x-www-form-urlencoded'}  
    const body = JSON.stringify(eth);
    return this.http.post<EthInterface>(this.urlAdd, body,{'headers':headers});
  }

}
