import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente-service';

@Component({
  selector: 'app-cadlogin',
  templateUrl: './cadlogin.component.html',
  styleUrls: ['./cadlogin.component.scss']
})
export class CadloginComponent {

  @Input() cliente: Cliente = new Cliente();
  @Output() retorno = new EventEmitter<Cliente>();

  clienteService = inject(ClienteService);

  constructor(){}

  salvar(){
    if(this.cliente.id>0){
      this.clienteService.update(this.cliente).subscribe({
        next: cliente => {
          this.retorno.emit(cliente);
        },
        error: erro => {
          alert('ERRO!! Verificar no console!!');
          console.error(erro);
        }
      });
    }else{
      this.clienteService.save(this.cliente).subscribe({
        next: cliente => {
          this.retorno.emit(cliente);
        },
        error: erro => {
          alert('Erro!! verificar no console!!');
          console.error(erro);
        }
      });
    }
  }

}
