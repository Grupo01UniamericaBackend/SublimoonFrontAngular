import { TestBed } from '@angular/core/testing';
import { CarrinhoService } from './carrinho-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CarrinhoService', () => {
  let service: CarrinhoService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(CarrinhoService);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
