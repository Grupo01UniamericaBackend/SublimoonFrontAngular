import { TestBed } from '@angular/core/testing';
import { AdmService } from './adm-service';
let service: AdmService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmService);
  });
describe('AdmService', () => {
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
