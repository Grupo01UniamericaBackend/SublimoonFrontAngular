import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetalhadoComponent } from './produto-detalhado.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, convertToParamMap } from '@angular/router';

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
});
