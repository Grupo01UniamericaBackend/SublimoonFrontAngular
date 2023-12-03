import { TestBed } from '@angular/core/testing';
import { PedidoService } from './pedido-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Carrinho } from '../models/carrinho';
import { Cliente } from '../models/cliente';
import { Item } from '../models/item';
import { Cor } from '../enums/cor';
import { Produto } from '../models/produto';
import { Pedido } from '../models/pedido';
import { Envio } from '../models/envio';


describe('PedidoService', () => {
  let service: PedidoService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(PedidoService);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
  it('teste post', () => {
    let produto = new Produto();
    produto.nome = 'teste',
    produto.categoria = 'CANECA';
    produto.cor = Cor.BRANCO;
    produto.preco = 10;
    produto.imagem= 'teste';
    produto.descricao = '.';
    produto.tamanho = '1';

    let item = new Item();
    item.produto = produto;
    item.quantidade = 1;
    
    let itens : Item[] = [];
    itens.push(item);

    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'ana';
    cliente.telefone = '45-9999-4533';
    cliente.cpf= '06773080940'

    let carrinho = new Carrinho();
    carrinho.cliente = cliente;
    carrinho.item = itens;
    carrinho.subTotal = 10;

    let envio = new Envio();
    envio.id = 1;
    envio.formaEnvio = 'correios';
    envio.valorFrete= 10;

    let postMock = new Pedido();
    postMock.id = 1;
    postMock.carrinho = carrinho;
    postMock.envio = envio;
   
    spyOn(service['http'], 'post').and.callThrough();
    service.save(postMock).subscribe();
    expect(service['http'].post).toHaveBeenCalledWith(service.API, postMock);
  });
  it('teste update', () => {

    let produto = new Produto();
    produto.nome = 'teste',
    produto.categoria = 'CANECA';
    produto.cor = Cor.BRANCO;
    produto.preco = 10;
    produto.imagem= 'teste';
    produto.descricao = '.';
    produto.tamanho = '1';

    let item = new Item();
    item.produto = produto;
    item.quantidade = 1;
    
    let itens : Item[] = [];
    itens.push(item);

    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'ana';
    cliente.telefone = '45-9999-4533';
    cliente.cpf= '06773080940'

    let carrinho = new Carrinho();
    carrinho.cliente = cliente;
    carrinho.item = itens;
    carrinho.subTotal = 10;

    let envio = new Envio();
    envio.id = 1;
    envio.formaEnvio = 'correios';
    envio.valorFrete= 10;

    let postMock = new Pedido();
    postMock.id = 1;
    postMock.carrinho = carrinho;
    postMock.envio = envio;
    spyOn(service['http'], 'put').and.callThrough();
    service.update(1, postMock).subscribe();
    expect(service['http'].put).toHaveBeenCalledWith(service.API + '/1', postMock);
  });

  it('teste getList', () => {
    spyOn(service['http'], 'get').and.callThrough();
    service.listAll().subscribe();
    expect(service['http'].get).toHaveBeenCalledWith(service.API+ '/lista');
  });
  it('teste listNome', () => {
    spyOn(service['http'], 'get').and.callThrough();
    service.findById(1).subscribe();
    expect(service['http'].get).toHaveBeenCalledWith(service.API+ '/1');
  });

  it('teste delete', () => {
    spyOn(service['http'], 'delete').and.callThrough();
    service.delete(1).subscribe();
    expect(service['http'].delete).toHaveBeenCalledWith(service.API+ '/1');
  });


});
