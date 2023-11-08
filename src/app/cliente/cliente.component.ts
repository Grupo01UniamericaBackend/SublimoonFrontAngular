import { Component } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent {

  cliente = new Cliente();

  constructor(){
    this.listarCliente();
  }
  listarCliente(){
    const cliente: Cliente = this.recuperarCliente("cliente");
    this.cliente = cliente;
    console.log("PASSOU", this.cliente);
  }

  recuperarCliente(chave: string): Cliente {
    const item = localStorage.getItem(chave);
    return item ? JSON.parse(item) : null;
  }
}
