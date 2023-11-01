import { TestBed } from '@angular/core/testing';
import { AvaliacaoService } from './avaliacao-service';
let service: AvaliacaoService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaliacaoService);
  });
describe('Avaliacao', () => {
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
