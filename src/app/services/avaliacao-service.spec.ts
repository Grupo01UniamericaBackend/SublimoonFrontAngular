import { TestBed } from '@angular/core/testing';
import { AvaliacaoService } from './avaliacao-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('Avaliacao', () => {
  let service: AvaliacaoService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(AvaliacaoService);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
