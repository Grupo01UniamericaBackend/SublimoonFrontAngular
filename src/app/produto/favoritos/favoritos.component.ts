import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/models/cliente';
import { Favorito } from 'src/app/models/favorito';
import { Produto } from 'src/app/models/produto';
import { FavoritoService } from 'src/app/services/favorito-service';
import { ProdutoService } from 'src/app/services/produto-service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent {
  @Output() retorno = new EventEmitter<Produto>();
  @Input() modoLancamento: boolean = false;

  adminRota: boolean = false;

  categoriaSelecionada: String = ''; 

  lista:Produto[]=[];
  listaNova:Produto[]=[];
  listaFavoritos: Produto[] = [];
 

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

    for(let produto of this.lista){
      for(let favorito of this.listaFavoritos){

        if(produto.id == favorito.id){
          
            produto.ativo = true;
            this.listaNova.push(produto);
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

    const cliente: Cliente = this.recuperarCliente("cliente");

    console.log(cliente.nome);
    this.favorito.produtos.push(produto);
    this.favorito.cliente = cliente;
  
     this.favoritoService.save(this.favorito).subscribe;
     this.listaFavoritos.push(produto);
     console.log(this.listaFavoritos);
     this.listAll();
  }  
  
  desfavoritar(produto: Produto){
    
    const index = this.listaFavoritos.findIndex(item => item.id === produto.id);
    if (index !== -1) {
        this.listaFavoritos.splice(index, 1);
        console.log('Produto removido da lista de favoritos:', produto);
    }
    this.favorito.produtos = this.listaFavoritos;
    this.favoritoService.update(1, this.favorito);

     console.log(this.listaFavoritos);
     this.listAll();
  }  

  recuperarCliente(chave: string): Cliente {
    const item = localStorage.getItem(chave);
    return item ? JSON.parse(item) : null;
  }
}
