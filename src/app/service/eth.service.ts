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

  getEth(): Observable<EthInterface[]>{
    return this.http.get<EthInterface[]>(this.url);
  }

  deleteEth(id:number): Observable<EthInterface>{
    console.log(id);
    return this.http.delete<EthInterface>(this.url+id);
  }

}
