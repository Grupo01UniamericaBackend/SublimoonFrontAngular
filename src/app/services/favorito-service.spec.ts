import { TestBed } from '@angular/core/testing';
import { FavoritoService } from './favorito-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


describe('FavoritoService', () => {
  let service: FavoritoService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(FavoritoService);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
