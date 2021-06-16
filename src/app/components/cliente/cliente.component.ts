import { Component, OnInit } from '@angular/core';
import { ModalCliente } from '../../model/model.cliente';
import { ClienteService } from '../../service/cliente.service';
import { FormBuilder, FormGroup } from '@angular/forms'


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: ModalCliente []=[];
  //clientes:any
  public form!: FormGroup;
  
  public informacionCLiente={
    customer_id:-1,
    store_id:"",
    first_name:"",
    last_name:"",
    email:"",
    address_id:"",
    active:"",
    create_date:"",
    last_update:""

  } 
  



  constructor(private clienteService:ClienteService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.LeerCLiente();
    this.form=this.formBuilder.group({
      txt_storeid:[''],
      txt_firstname:[''],
      txt_lastname:[''],
      txt_email:[''],
      txt_addresID:[''],
      txt_active:[''],
      txt_createDate:[''],
      txt_lastUpdate:['']
    })


  }
  public LeerCLiente(){
    this.clientes = []
    this.clienteService.getCliente().subscribe(
      (cliente:any)=>{        
        for(let a of cliente){          
         this.clientes.push({
           customer_id:a[0],
          store_id:a[1], 
          first_name:a[2],
          last_name:a[3],
          email:a[4],
          address_id:a[5],
          active:a[6],
          create_date:a[7],
          last_update:a[8]
        })
        }
      },
      (error)=> console.warn(error)

    )
    
  } 


}
