import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetalhadoComponent } from './produto-detalhado.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

describe('ProdutoDetalhadoComponent', () => {
  let component: ProdutoDetalhadoComponent;
  let fixture: ComponentFixture<ProdutoDetalhadoComponent>;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProdutoDetalhadoComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '1' // Assuming '1' is the ID you want for testing
              }
            } as ActivatedRouteSnapshot
          }
        }
      ]
    });
    fixture = TestBed.createComponent(ProdutoDetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve setar id corretinho para route params', () => {
    expect(component.id).toEqual(0);
  });

  it('diminuir quantidade', () => {
    component.quantidade = 3;

    component.diminuirNumero();

    expect(component.quantidade).toEqual(2);
  });

  it('nao deve diminuir quantidade abaixo de 0', () => {
    component.quantidade = 0;

    component.diminuirNumero();

    expect(component.quantidade).toEqual(0);
  });

  it('deve adicionar ao carrinho corretamente', () => {
    spyOn(component, 'salvarProduto');
    component.adicionarCarrinho();

    expect(component.salvarProduto).toHaveBeenCalled();
  });

  it('nao deve aumentar quantidade acima do estoque', () => {
    component.quantidade = 5;
    component.produto.quantidade = 4; 

    component.aumentarNumero();

    expect(component.quantidade).toEqual(4);
  });
});
