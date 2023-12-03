import { TestBed } from '@angular/core/testing';
import { ItemService } from './item-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


describe('ItemService', () => {
  let service: ItemService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]});
    service = TestBed.inject(ItemService);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
