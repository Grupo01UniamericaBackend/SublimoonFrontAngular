import { TestBed } from '@angular/core/testing';
import { PedidoService } from './pedido-service';

let service: PedidoService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoService);
  });
describe('PedidoService', () => {
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
