import { TestBed } from '@angular/core/testing';
import { ClienteService } from './cliente-service';
let service: ClienteService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteService);
  });
describe('ClienteService', () => {
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
