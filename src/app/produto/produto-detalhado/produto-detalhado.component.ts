import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/app/models/item';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto-service';

@Component({
  selector: 'app-produto-detalhado',
  templateUrl: './produto-detalhado.component.html',
  styleUrls: ['./produto-detalhado.component.scss']
})
export class ProdutoDetalhadoComponent {
 
  produtoService = inject(ProdutoService);
  produto: Produto = new Produto();
  item : Item = new Item();

  id: number = 0; 

  quantidade: number = 0;

  constructor(private route: ActivatedRoute){

    this.obterIDDaRota();
    
  }
  findById(){
    this.produtoService.findById(this.id).subscribe({
      next: produto => { // QUANDO DÁ CERTO
        this.produto = produto;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });
  }

 
  obterIDDaRota() {
    if (this.route.paramMap) {
      this.route.paramMap.subscribe((params: ParamMap) => {
        const idParam = params.get('id');
        if (idParam !== null) {
          this.id = +idParam; 
          this.findById();
        }
      });
    }
  }



  adicionarCarrinho(){
    this.item.produto = this.produto;
    this.item.quantidade = this.quantidade;
    this.item.valorUnit = this.produto.preco;
    this.item.valorTotal = this.produto.preco * this.quantidade;
    this.salvarProduto("carrinho", this.item);
  }
  
  aumentarNumero() {
    if(this.quantidade = this.produto.quantidade){
      alert('não há mais estoque para este produto!')
    }
    else{
      this.quantidade = this.quantidade + 1;
    }    
  }
  
   diminuirNumero() {
    if(this.quantidade > 0){
      this.quantidade = this.quantidade - 1;
    }
    }

 


    
  salvarProduto(chave: string, item: Item): void {
    
    const itensSalvos = JSON.parse(localStorage.getItem(chave) || '[]') as Item[];

    
    const produtoExistente = itensSalvos.findIndex(p => p.produto.nome === item.produto.nome);

    if (produtoExistente !== -1) {
      if (itensSalvos[produtoExistente].quantidade >= this.produto.quantidade) {
        alert('O produto não possui estoque suficiente');
      } 
      else {
        if(itensSalvos[produtoExistente].quantidade + item.quantidade > this.produto.quantidade){
          alert('adicione menos');
        }
        else{
        itensSalvos[produtoExistente].quantidade += item.quantidade;
        }
      }
     }
      else {
      itensSalvos.push({...item});
    }

    localStorage.setItem(chave, JSON.stringify(itensSalvos));
  }
 
}
