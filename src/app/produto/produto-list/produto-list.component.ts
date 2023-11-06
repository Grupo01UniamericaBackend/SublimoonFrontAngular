import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/enums/categoria';
import { Cliente } from 'src/app/models/cliente';
import { Favorito } from 'src/app/models/favorito';
import { Produto } from 'src/app/models/produto';
import { FavoritoService } from 'src/app/services/favorito-service';
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
  favoritoService = inject(FavoritoService);

  

  constructor(private router: Router, private route: ActivatedRoute){
    this.listAll();
    this.verficarRota();
    this.carregarProdutos();

  }

  listAll(){

    const listaFavoritos: Produto[] = this.recuperarFavorito("lista");
    this.produtoService.listAll().subscribe({
      next: lista =>{
        this.lista = lista;
      },
      error: erro => {
        alert("Algo deu errado!");
        console.error(erro);
      }
    })

    for(let produto of this.lista){
      for(let favorito of listaFavoritos){

        if(produto.id == favorito.id){

            produto.ativo = true;
            console.log(produto);
        }
      }
    }
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


  favoritar(produto: Produto){
    const lista: Produto[] = this.recuperarFavorito("lista");
    const cliente: Cliente = this.recuperarCliente("cliente");

    console.log(cliente.nome);
    this.favorito.produtos.push(produto);
    this.favorito.cliente = cliente;
  
     this.favoritoService.save(this.favorito).subscribe;
     this.lista.push(produto);
     console.log(this.lista);
     this.salvarFavoritos("lista", this.lista);
    
     this.listAll();
  }  
  
  desfavoritar(produto: Produto){
    const lista: Produto[] = this.recuperarFavorito("lista");
    const index = this.lista.findIndex(item => item.id === produto.id);
    if (index !== -1) {
        this.lista.splice(index, 1);
        console.log('Produto removido da lista de favoritos:', produto);
    }
    this.favorito.produtos = this.lista;
    this.favoritoService.update(1, this.favorito);


     console.log(this.lista);
     this.salvarFavoritos("lista", this.lista);
     this.listAll();
  }  
  salvarFavoritos(chave: string, favorito: Produto[]): void {
    localStorage.setItem(chave, JSON.stringify(favorito));
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

  }*/

  recuperarCliente(chave: string): Cliente {
    const item = localStorage.getItem(chave);
    return item ? JSON.parse(item) : null;
  }
  recuperarFavorito(chave: string): Produto[] {
    const item = localStorage.getItem(chave);
    return item ? JSON.parse(item) : null;
  }

}