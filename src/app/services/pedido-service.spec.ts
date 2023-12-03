import { TestBed } from '@angular/core/testing';
import { PedidoService } from './pedido-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


describe('PedidoService', () => {
  let service: PedidoService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(PedidoService);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
