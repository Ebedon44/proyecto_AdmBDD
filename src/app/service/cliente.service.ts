import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public getCliente() {
    const url = `http://localhost:3000/customers`;
    return this.http.get(url);
  }

  /*public deleteCliente(cli_id){
    const url = 'http://localhost:3000/pizzas/'+cli_id;
    return this.http.delete(url);
  }*/

 /* public postCliente(body: any) {

    const url = 'http://localhost:3000/pizzas';

    return this.http.post(url, body);

  }

  public updateCliente(piz_id: any) {
    const url = 'http://localhost:3000/pizzas';
    return this.http.put(url, piz_id)
  }*/



}



