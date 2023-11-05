import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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

  id: number = 0;

  constructor(private route: ActivatedRoute){

    this.obterIDDaRota();
    this.findById();
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

    
   /* this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
         this.id = +params.get('id');
        if (!isNaN(id)) {
          console.log('ID do produto:', id);
        } else {
          console.log('O ID do produto na rota não é um número válido.');
        }
      } else {
        console.log('ID do produto não encontrado na rota.');
      }
    });*/
}


}
