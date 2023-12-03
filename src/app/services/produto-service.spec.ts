import { TestBed } from '@angular/core/testing';
import { ProdutoService } from './produto-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProdutoService', () => {

  let service: ProdutoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProdutoService]
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
});
