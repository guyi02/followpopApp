import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SocialpanelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SocialpanelProvider {
  api: string = 'https://socialpanel24.com/api/v2';
  key: string = 'c5828e78f69c4800b6945d86bc3633f8';
  header = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(public http: HttpClient) {

  }

  getCreditsSocial() {
    return this.http.post<any>(`${this.api}?key=${this.key}&action=balance`, {headers: this.header})
  }

}
