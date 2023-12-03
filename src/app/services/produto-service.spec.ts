import { TestBed } from '@angular/core/testing';
import { ProdutoService } from './produto-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Produto } from '../models/produto';
import { Cor } from '../enums/cor';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Categoria } from '../enums/categoria';

describe('ProdutoService', () => {

  let service: ProdutoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProdutoService],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    service = TestBed.inject(ProdutoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
  
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
  it('teste post', () => {
    let postMock = new Produto();
    postMock.id = 1;
    postMock.nome = 'teste',
    postMock.categoria = 'CANECA';
    postMock.cor = Cor.BRANCO;
    postMock.preco = 10;
    postMock.imagem= 'teste';
    postMock.descricao = '.';
    postMock.tamanho = '1';
    
    spyOn(service['http'], 'post').and.callThrough();
    service.save(postMock).subscribe();
    expect(service['http'].post).toHaveBeenCalledWith(service.API, postMock); 
     httpMock.expectOne(service.API).flush({});
  });
  it('teste update', () => {
    let postMock = new Produto();
    postMock.id = 1;
    postMock.nome = 'teste',
    postMock.categoria = 'CANECA';
    postMock.cor = Cor.BRANCO;
    postMock.preco = 10;
    postMock.imagem= 'teste';
    postMock.descricao = '.';
    postMock.tamanho = '1';
    
    spyOn(service['http'], 'put').and.callThrough();
    service.update(1, postMock).subscribe();
    expect(service['http'].put).toHaveBeenCalledWith(service.API + '/1', postMock);

    httpMock.expectOne(service.API + '/1').flush({});

  });

  it('teste getList', () => {
    spyOn(service['http'], 'get').and.callThrough();
    service.listAll().subscribe();
    expect(service['http'].get).toHaveBeenCalledWith(service.API+ '/lista');
    httpMock.expectOne(service.API + '/lista').flush({});

  });
  
  it('teste listNome', () => {
    spyOn(service['http'], 'get').and.callThrough();
    service.findById(1).subscribe();
    expect(service['http'].get).toHaveBeenCalledWith(service.API+ '/1');
    httpMock.expectOne(service.API + '/1').flush({});

  });

  it('teste delete', () => {
    spyOn(service['http'], 'delete').and.callThrough();
    service.delete(1).subscribe();
    expect(service['http'].delete).toHaveBeenCalledWith(service.API+ '/1');
    httpMock.expectOne(service.API + '/1').flush({});

  });
});
