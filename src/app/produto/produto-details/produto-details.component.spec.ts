import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetailsComponent } from './produto-details.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProdutoService } from 'src/app/services/produto-service';

describe('ProdutoDetailsComponent', () => {
  let component: ProdutoDetailsComponent;
  let fixture: ComponentFixture<ProdutoDetailsComponent>;
  let produtoService: ProdutoService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProdutoDetailsComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ProdutoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
