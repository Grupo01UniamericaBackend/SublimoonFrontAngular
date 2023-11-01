import { TestBed } from '@angular/core/testing';
import { ItemService } from './item-service';

let service: ItemService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemService);
  });
describe('ItemService', () => {
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
