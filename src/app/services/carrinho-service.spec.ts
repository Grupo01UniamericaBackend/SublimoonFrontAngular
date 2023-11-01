import { TestBed } from '@angular/core/testing';
import { CarrinhoService } from './carrinho-service';
let service: CarrinhoService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrinhoService);
  });
describe('CarrinhoService', () => {
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
