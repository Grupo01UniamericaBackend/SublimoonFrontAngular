import { TestBed } from '@angular/core/testing';
import { ClienteService } from './cliente-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Cliente } from '../models/cliente';

describe('ClienteService', () => {
  let service: ClienteService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(ClienteService);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
  it('teste post', () => {
    let postMock = new Cliente();
    postMock.id = 1;
    postMock.nome = 'ana';
    postMock.telefone = '45-9999-4533';
    postMock.cpf= '06773080940'
    spyOn(service['http'], 'post').and.callThrough();
    service.save(postMock).subscribe();
    expect(service['http'].post).toHaveBeenCalledWith(service.API, postMock);
  });
  it('teste update', () => {

    let postMock = new Cliente();
    postMock.id = 1;
    postMock.nome = 'ana';
    postMock.telefone = '45-9999-4533';
    postMock.cpf= '06773080940'

   
    spyOn(service['http'], 'put').and.callThrough();
    service.update(postMock).subscribe();
    expect(service['http'].put).toHaveBeenCalledWith(service.API, postMock);
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
