import { Component, OnInit } from '@angular/core';
import { ModalCliente } from '../../model/model.cliente';
import { ClienteService } from '../../service/cliente.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalAddress } from '../../model/model.address';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  clientes: ModalCliente[] = [];
  address: ModalAddress[] = [];
  store: number[] = [];
  cliente: ModalCliente = {
    customer_id: 0,
    store_id: 0,
    first_name: '',
    last_name: '',
    email: '',
    address_id: 0,
    active: 0,
  };
  //clientes:any
  public form!: FormGroup;

  public informacionCLiente = {
    customer_id: -1,
    store_id: '',
    first_name: '',
    last_name: '',
    email: '',
    address_id: '',
    active: '',
    create_date: '',
    last_update: '',
  };

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.LeerCLiente();
    this.getAddress();
    this.getStore();
    this.form = this.formBuilder.group({
      txt_idClient: [''],
      txt_firstname: [''],
      txt_lastname: [''],
      txt_email: [''],
      select_store: [''],
      select_address: [''],
      select_isActive: [''],
    });
  }

  public LeerCLiente() {
    this.clientes = [];
    this.clienteService.getCliente().subscribe(
      (cliente: any) => {
        for (let a of cliente) {
          this.clientes.push({
            customer_id: a[0],
            address_id:a[1],
            store_id: a[2],
            first_name: a[3],
            last_name: a[4],
            email: a[5],
            address_name: a[6],
            active: a[7],
            create_date: a[8].split('T')[0],
            last_update: a[9].split('T')[0],
          });
        }
      },
      (error) => console.warn(error)
    );
  }

  public getAddress() {
    this.clienteService.getAdress().subscribe((address: any) => {
      address.map((res: any) => {
        this.address.push({ addressId: res[0], addressName: res[1] });
      });
    });
  }

  public getStore() {
    this.clienteService.getStore().subscribe((store: any) => {
      this.store = store;
    });
  }

  public insertCliente() {
    const body = {
      customer_id: this.form.value.txt_idClient,
      store_id: this.form.value.select_store,
      first_name: this.form.value.txt_firstname,
      last_name: this.form.value.txt_lastname,
      email: this.form.value.txt_email,
      address_id: this.form.value.select_address,
      active: this.form.value.select_isActive,
    };
    this.clienteService.postCliente(body).subscribe((res) => {
      console.log(res);
      console.log('CLIENTE CREADO CORRECTAMENTE');
      this.form.reset();
      this.LeerCLiente();
    });
  }

  chooseUpdate(customer: ModalCliente) {
    this.cliente = customer;
    console.log(this.cliente);
  }

  updateCliente(){
    const body = {...this.cliente}
    this.clienteService.updateCliente(body).subscribe(res=>{
      console.log(res);
      console.log('Cliente actualizado correctamente');
    })
  }

  public deleteCliente(customerId: number) {
    this.clienteService.deleteCliente(customerId).subscribe((res) => {
      console.log('Cliente eliminado correctamente');
      this.LeerCLiente();
    });
  }
}
