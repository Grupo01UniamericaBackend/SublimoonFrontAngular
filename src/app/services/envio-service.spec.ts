import { TestBed } from '@angular/core/testing';
import { EnvioService } from './envio-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('EnvioService', () => {
  let service: EnvioService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(EnvioService);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
