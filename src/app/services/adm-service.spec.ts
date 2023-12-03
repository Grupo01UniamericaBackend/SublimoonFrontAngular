import { TestBed } from '@angular/core/testing';
import { AdmService } from './adm-service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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
});
