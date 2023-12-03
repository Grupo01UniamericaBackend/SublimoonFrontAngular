import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-carrinholist',
  templateUrl: './carrinholist.component.html',
  styleUrls: ['./carrinholist.component.scss']
})
export class CarrinholistComponent {

  lista:Item[]=[];
  indiceEdicao!: number;

  constructor(){
    this.list();

  }

 list(){

  const itensSalvos = JSON.parse(localStorage.getItem("carrinho") || '[]') as Item[];


  this.lista = itensSalvos;
 }

 aumentarNumero(item: Item) {
  if(item.quantidade = item.produto.quantidade){
    alert('não há mais estoque para este produto!')
  }
  else{
    item.quantidade = item.quantidade + 1;
    item.valorTotal = item.produto.preco * item.quantidade;
    this.adicionarCarrinho(item);
  }    
}

 diminuirNumero(item: Item) {
  if(item.quantidade > 0){
    item.quantidade = item.quantidade - 1;
    item.valorTotal = item.produto.preco * item.quantidade;
    this.adicionarCarrinho(item);
  }
  }
  adicionarCarrinho(item: Item){
    this.salvarProduto("carrinho", item);
  }
  remover(item: Item){
    item.quantidade = 0;
    this.salvarProduto("carrinho", item);
  }
  
  salvarProduto(chave: string, item: Item): void {
    console.log('entrou aqui0');
    const itensSalvos = JSON.parse(localStorage.getItem(chave) || '[]') as Item[];

    console.log('antes sdo findIndex');
    const produtoExistente = itensSalvos.findIndex(p => p.produto.nome === item.produto.nome);
    console.log('findIndex ok');
    if (produtoExistente !== -1) {
       
        if(item.quantidade > item.produto.quantidade){
          alert('adicione menos');
        }
        else if( item.quantidade === 0){
          //tirar o produto da lista
          itensSalvos.splice(produtoExistente, 1);
        }
        else{
        itensSalvos[produtoExistente] = item;
        }
    
    }
      
    localStorage.setItem(chave, JSON.stringify(itensSalvos));
    this.list();
  }

  enviarPedido(): void {
    const nomeEmpresa: string = "SUBLIMOON";
    const numeroWhatsApp: string = "5545999568491";
    const listaProdutos: string = this.lista.map(item => `${item.produto.nome} (${item.quantidade})`).join('\n');
    const valorTotal: string = "Valor Total do Pedido";
  
    const mensagem: string = `Olá, gostaria de fazer um pedido:\n\n${listaProdutos}\n\nValor Total: R$ ${valorTotal}`;
  
    const mensagemEncoded: string = encodeURIComponent(mensagem);
  
    // Link do ZAP
    const linkWhatsApp: string = `https://wa.me/${numeroWhatsApp}?text=${mensagemEncoded}`;
  
    window.open(linkWhatsApp);
    
  }
  
}
