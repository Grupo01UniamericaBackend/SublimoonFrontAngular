import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCategoriaComponent } from './produto-categoria.component';

describe('ProdutoCategoriaComponent', () => {
  let component: ProdutoCategoriaComponent;
  let fixture: ComponentFixture<ProdutoCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoCategoriaComponent]
    });
    fixture = TestBed.createComponent(ProdutoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
