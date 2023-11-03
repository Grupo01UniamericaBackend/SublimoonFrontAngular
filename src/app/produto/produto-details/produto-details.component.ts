import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/models/pedido';
import { Produto } from 'src/app/models/produto';
import { PedidoService } from 'src/app/services/pedido-service';
import { ProdutoService } from 'src/app/services/produto-service';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.scss']
})
export class ProdutoDetailsComponent {
  @Input() produto : Produto = new Produto();
  @Input() modoEdit : boolean = false;
  @Output() retorno = new EventEmitter<Produto>;

  @Input() pedido: Pedido = new Pedido();
 

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  pedidosService = inject(PedidoService); 
  produtoService = inject(ProdutoService);

  constructor(){}

  salvar(){
    this.produtoService.save(this.produto).subscribe({
      next: produto => { 
        this.retorno.emit(produto);
      },
      error: erro => { 
        alert('erro na função salvar!');
        console.error(erro);
      }
    });
  }
  editar(){
    this.produtoService.update(this.produto.id, this.produto).subscribe({
      next: produto => { 
        this.retorno.emit(produto);
      },
      error: erro => { 
        alert('erro na função salvar!');
        console.error(erro);
      }
    });
  }
}

