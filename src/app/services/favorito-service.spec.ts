import { TestBed } from '@angular/core/testing';
import { FavoritoService } from './favorito-service';

let service: FavoritoService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritoService);
  });
describe('FavoritoService', () => {
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
