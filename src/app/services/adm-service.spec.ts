import { TestBed } from '@angular/core/testing';
import { AdmService } from './adm-service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Adm } from '../models/adm';

describe('AdmService', () => {
let service: AdmService;
let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdmService, HttpClient]  // Adicione HttpClient aqui se necessário
    });
    service = TestBed.inject(AdmService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });

  
  it('teste post', () => {

    let postMock = new Adm();
    postMock.userAdm = 'testuser';
    postMock.senhaAdm = 'testpassword';
    spyOn(service['http'], 'post').and.callThrough();
    service.save(postMock).subscribe();
    expect(service['http'].post).toHaveBeenCalledWith(service.API, postMock);
  });
  it('teste update', () => {

    let postMock = new Adm();
    postMock.userAdm = 'testuser';
    postMock.senhaAdm = 'testpassword';
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
