import { TestBed } from '@angular/core/testing';
import { AvaliacaoService } from './avaliacao-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Avaliacao } from '../models/avaliacao';
import { Cliente } from '../models/cliente';
import { Produto } from '../models/produto';
import { Cor } from '../enums/cor';

describe('Avaliacao', () => {
  let service: AvaliacaoService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(AvaliacaoService);
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

    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'ana';
    cliente.telefone = '45-9999-4533';
    cliente.cpf= '06773080940'

    let postMock = new Avaliacao();
    postMock.cliente = cliente;
    postMock.comentario = 'test';
    postMock.nota = 5;
    postMock.produto = produto;
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

    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'ana';
    cliente.telefone = '45-9999-4533';
    cliente.cpf= '06773080940'

    let postMock = new Avaliacao();
    postMock.cliente = cliente;
    postMock.comentario = 'test';
    postMock.nota = 5;
    postMock.produto = produto;
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
