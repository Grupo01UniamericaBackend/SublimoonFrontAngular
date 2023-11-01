import { TestBed } from '@angular/core/testing';
import { ProdutoService } from './produto-service';
let service: ProdutoService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoService);
  });
describe('ProdutoService', () => {
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
