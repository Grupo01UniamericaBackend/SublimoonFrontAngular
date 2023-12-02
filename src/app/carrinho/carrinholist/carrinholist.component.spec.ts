import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinholistComponent } from './carrinholist.component';

describe('CarrinholistComponent', () => {
  let component: CarrinholistComponent;
  let fixture: ComponentFixture<CarrinholistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrinholistComponent]
    });
    fixture = TestBed.createComponent(CarrinholistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
