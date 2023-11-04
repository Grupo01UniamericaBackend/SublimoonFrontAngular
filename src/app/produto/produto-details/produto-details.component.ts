import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/enums/categoria';
import { Cor } from 'src/app/enums/cor';
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
  categorias = Object.keys(Categoria);
  cores = Object.keys(Cor);
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

  imagem = '';
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.produto.imagem = event.target.result;
    };
    reader.readAsDataURL(file);
  }
}

