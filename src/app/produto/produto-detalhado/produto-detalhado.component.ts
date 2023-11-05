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
    this.route.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.id = +idParam; 
        this.findById();
      }
    });
  }
  


}
