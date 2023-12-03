import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetailsComponent } from './produto-details.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProdutoService } from 'src/app/services/produto-service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

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

  it('deve chamar o metodo save quando clicar em salvar()', () => {
    const saveSpy = spyOn(component.produtoService, 'save').and.callThrough();

    component.salvar();
    expect(saveSpy).toHaveBeenCalled();
  });

  it('deve mostrar os botoes quando for adm', () => {
    component.modoEdit = true;
    fixture.detectChanges();
  
    const editarButton = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;
    const cadastrarButton = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;
  
    expect(editarButton.textContent).toContain('EDITAR');
    expect(cadastrarButton.textContent).not.toContain('CADASTRAR');
  });

});
