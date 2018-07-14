import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the InstantismoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InstantismoProvider {
  api: string = '	https://instantsmo.com/api/v2';
  key: string = '22430514a48957402350c7da763adbda';
  header = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(public http: HttpClient) {

  }

  getCreditsInstantismo() {
    return this.http.post<any>(`${this.api}?key=${this.key}&action=balance`, { headers: this.header })
  }

}
