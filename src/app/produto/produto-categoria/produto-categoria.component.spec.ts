import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCategoriaComponent } from './produto-categoria.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProdutoService } from 'src/app/services/produto-service';
import { ActivatedRoute, Router } from '@angular/router';

class ActivatedRouteStub {
  paramMap = of({
    get: (param: string) => {
      if (param === 'categoria') {
        return 'CANECA'; // Defina a categoria de teste
      }
      return null;
    }
  });
}
describe('ProdutoCategoriaComponent', () => {
  let component: ProdutoCategoriaComponent;
  let fixture: ComponentFixture<ProdutoCategoriaComponent>;
  let modalService: NgbModal;
  let produtoService: ProdutoService;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoCategoriaComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        NgbModal,
        ProdutoService,
        Router
      ]
    });
    fixture = TestBed.createComponent(ProdutoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
