import { TestBed } from '@angular/core/testing';
import { ItemService } from './item-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Item } from '../models/item';
import { Produto } from '../models/produto';
import { Cor } from '../enums/cor';


describe('ItemService', () => {
  let service: ItemService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(ItemService);
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

    let postMock = new Item();
    postMock.produto = produto;
    postMock.quantidade = 1;
   
    
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

    let postMock = new Item();
    postMock.produto = produto;
    postMock.quantidade = 1;
    
  
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
