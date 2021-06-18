import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  public getCliente() {
    const url = `http://localhost:3000/customers`;
    return this.http.get(url);
  }

  public getAdress() {
    const url = `http://localhost:3000/address`;
    return this.http.get(url);
  }

  public getStore(){
    const url = `http://localhost:3000/store`;
    return this.http.get(url);
  }

  public postCliente(body:any) {
    const url = `http://localhost:3000/customers`
    return this.http.post(url,body);
  }

  public updateCliente(body:any){
    const url = `http://localhost:3000/customers`
    return this.http.put(url,body);
  }

  public deleteCliente(customer_id:number){
    const url = `http://localhost:3000/customers/${customer_id}`
    return this.http.delete(url);
  }

  /*public deleteCliente(cli_id){
    const url = 'http://localhost:3000/pizzas/'+cli_id;
    return this.http.delete(url);
  }*/

  /* public postCliente(body: any) {

    const url = 'http://localhost:3000/pizzas';

    return this.http.post(url, body);

  }
sadasd
  public updateCliente(piz_id: any) {
    const url = 'http://localhost:3000/pizzas';
    return this.http.put(url, piz_id)
  }*/
}
