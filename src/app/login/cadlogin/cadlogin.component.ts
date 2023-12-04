import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { User } from 'src/app/models/user';
import { Usuario } from 'src/app/models/usuario';
import { ClienteService } from 'src/app/services/cliente-service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cadlogin',
  templateUrl: './cadlogin.component.html',
  styleUrls: ['./cadlogin.component.scss']
})
export class CadloginComponent {

  @Input() usuario: User = new User();
  @Output() retorno = new EventEmitter<User>();

  usuarioService = inject(LoginService);

  constructor(){
    this.usuarioService.removerToken();
  }

  salvar(){
      this.usuarioService.postar(this.usuario).subscribe({
        next: usuario => {
          this.retorno.emit(usuario);
          alert('SEJA BEM VINDO(A)!!');
        },
        error: erro => {
          alert('Erro!! verificar no console!!');
          console.error(erro);
        }
      });
    
  }

}