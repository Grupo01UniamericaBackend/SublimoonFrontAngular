import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/enums/categoria';
import { Favorito } from 'src/app/models/favorito';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto-service';

@Component({
  selector: 'app-produto-categoria',
  templateUrl: './produto-categoria.component.html',
  styleUrls: ['./produto-categoria.component.scss']
})
export class ProdutoCategoriaComponent {

  @Output() retorno = new EventEmitter<Produto>();
  @Input() modoLancamento: boolean = false;

  adminRota: boolean = false;

  categoriaSelecionada: String = ''; 

  lista:Produto[]=[];
  listaNova:Produto[]=[];

  favorito: Favorito = new Favorito();
  produtoEdicao: Produto = new Produto();
  indiceEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  produtoService = inject(ProdutoService);

  

  constructor(private router: Router, private route: ActivatedRoute){
    this.verficarRota();
    this.list();
  }

  listAll(){

    this.produtoService.listAll().subscribe({
      next: lista =>{
        this.lista = lista;
      },
      error: erro => {
        alert("Algo deu errado!");
        console.error(erro);
      }
    })
  }

  verficarRota(){

    const rotaAtual = this.router.url;

    if (rotaAtual === '/admin/produto') {
      this.adminRota = true;
    } else {
      this.adminRota = false;
    } 


  }

  adicionar(modal: any) {
    this.produtoEdicao = new Produto();

    this.modalService.open(modal, { size: 'lg' });
  }

  editar(modal: any, produto: Produto, indice: number) {
    this.produtoEdicao = Object.assign({}, produto); 
    this.indiceEdicao = indice;

    this.modalService.open(modal, { size: 'lg' });
  }

  deletar(id: number) {

    this.produtoService.delete(id).subscribe({
      next: lista => { // QUANDO DÁ CERTO
        alert('deletado com sucesso!');
        this.listAll();
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });

  }
  
  addList(produto:Produto) {

    this.listAll();
    this.modalService.dismissAll();

  }

  adicionarproduto(modal: any) {
    this.produtoEdicao = new Produto();
    this.indiceEdicao = -1;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }

  editarproduto(modal: any, produto: Produto, indice: number) {
    this.produtoEdicao = Object.assign({}, produto); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceEdicao = indice;

    this.modalRef = this.modalService.open(modal, { size: 'sm' });
  }


  addOuEditarproduto(produto: Produto) {

    this.listAll();

    this.modalService.dismissAll();
  }

  detalhar(id: number){

      this.router.navigate(['admin/detalhes', id]);
  }

 /* selecionarCategoria(categoria: string) {
    this.categoriaSelecionada = categoria as Categoria; 
    this.listarProdutosPorCategoria();
  }

  listarProdutosPorCategoria() {
    if (this.categoriaSelecionada) {
      this.produtoService.listarPorCategoria(this.categoriaSelecionada).subscribe({
        next: (produtos) => {
          this.lista = produtos;
        },
        error: (erro) => {
          console.error(erro);
        }
      });
    }
  }*/
  list() {
    this.route.paramMap.subscribe((params: ParamMap) => {
     
      const CatParam = params.get('categoria');
      console.log(CatParam);
      if (CatParam !== null) {
        this.listaNova = [];
        this.categoriaSelecionada = CatParam; 

        for(let produto of this.lista){
         
          if(produto.categoria === this.categoriaSelecionada){
            this.listaNova.push(produto);

          }
        }
        this.lista = this.listaNova;
        if(this.categoriaSelecionada == 'COPOTERMICO'){
        this.produtoService.listarPorCategoria(Categoria.COPOTERMICO).subscribe({
          next: lista =>{
            this.lista = lista;
          },
          error: erro => {
            alert("Algo deu errado!");
            console.error(erro);
          }
        })
      }
      if(this.categoriaSelecionada == 'CANECA'){
        this.produtoService.listarPorCategoria(Categoria.CANECA).subscribe({
          next: lista =>{
            this.lista = lista;
          },
          error: erro => {
            alert("Algo deu errado!");
            console.error(erro);
          }
        })
      }
      if(this.categoriaSelecionada == 'CAMISETA'){
        this.produtoService.listarPorCategoria(Categoria.CAMISETA).subscribe({
          next: lista =>{
            this.lista = lista;
          },
          error: erro => {
            alert("Algo deu errado!");
            console.error(erro);
          }
        })
      }
      if(this.categoriaSelecionada == 'GARRAFINHA'){
        this.produtoService.listarPorCategoria(Categoria.GARRAFINHA).subscribe({
          next: lista =>{
            this.lista = lista;
          },
          error: erro => {
            alert("Algo deu errado!");
            console.error(erro);
          }
        })
      }

        
      } else{
      
        this.listAll();
    }
    });
   
  }

}
