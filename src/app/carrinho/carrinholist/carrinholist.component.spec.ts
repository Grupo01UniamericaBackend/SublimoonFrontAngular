import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinholistComponent } from './carrinholist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CarrinholistComponent', () => {
  let component: CarrinholistComponent;
  let fixture: ComponentFixture<CarrinholistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrinholistComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(CarrinholistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
