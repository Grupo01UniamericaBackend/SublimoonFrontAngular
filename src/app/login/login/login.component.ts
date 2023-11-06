import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Adm } from 'src/app/models/adm';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  roteador = inject(Router);
  clienteService = inject(ClienteService);
  adm: Adm = new Adm;

  lista:Cliente[]=[];

  nome: String = '';
  senha: String = '';

  constructor(){
    this.listAll();
  }
  
  logar() {
    if (this.nome == "AdmUserPred123" && this.senha == "123senhaAdm321") {
      this.roteador.navigate(['/admin']);
    } else {
      let clienteEncontrado = false;
      for (let cliente of this.lista) {
        if (this.senha == cliente.senha && this.nome == cliente.nome) {
          clienteEncontrado = true;
          break; // Para sair do loop depois de encontrar o cliente tomaaa
        }
      }
  
      if (clienteEncontrado) {
        alert("Bem-vindo(a) Cliente!!");
        this.roteador.navigate(['/cliente/produto']);
      } else {
        alert("Nome ou senha incorretos!!");
      }
    }
  }

  listAll(){

    this.clienteService.listAll().subscribe({
      next: lista =>{
        this.lista = lista;
      },
      error: erro => {
        alert("Algo deu errado!");
        console.error(erro);
      }
    })

  }

}
