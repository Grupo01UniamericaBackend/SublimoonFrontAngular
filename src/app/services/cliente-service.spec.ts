import { TestBed } from '@angular/core/testing';
import { ClienteService } from './cliente-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ClienteService', () => {
  let service: ClienteService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(ClienteService);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
