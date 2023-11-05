import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetalhadoComponent } from './produto-detalhado.component';

describe('ProdutoDetalhadoComponent', () => {
  let component: ProdutoDetalhadoComponent;
  let fixture: ComponentFixture<ProdutoDetalhadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoDetalhadoComponent]
    });
    fixture = TestBed.createComponent(ProdutoDetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
