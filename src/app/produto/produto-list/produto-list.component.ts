import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/enums/categoria';
import { Favorito } from 'src/app/models/favorito';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto-service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent {
  @Output() retorno = new EventEmitter<Produto>();
  @Input() modoLancamento: boolean = false;

  adminRota: boolean = false;

  categoriaSelecionada: String = ''; 

  lista:Produto[]=[];
  listaNova:Produto[]=[];
 
  termoPesquisa: string = '';

  favorito: Favorito = new Favorito();
  produtoEdicao: Produto = new Produto();
  indiceEdicao!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  produtoService = inject(ProdutoService);

  

  constructor(private router: Router, private route: ActivatedRoute){
    this.listAll();
    this.verficarRota();
    this.carregarProdutos();

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

  carregarProdutos() {
    this.produtoService.listAll().subscribe((produtos) => {
      this.lista = produtos;
    });
  }

  filtrarProdutos() {
    if (this.termoPesquisa) {
      this.lista = this.lista.filter((produto) =>
        produto.nome.toLowerCase().includes(this.termoPesquisa.toLowerCase())
      );
    } else {
      this.carregarProdutos();
    }
  }

  limparFiltro() {
    this.termoPesquisa = '';
    this.carregarProdutos();
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

  
}
