import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProdutoListComponent } from './produto-list.component';
import { ProdutoService } from 'src/app/services/produto-service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

const activatedRouteMock = {
  snapshot: {
    paramMap: {
      get: () => '1',  
    },
  },
};
describe('ProdutoListComponent', () => {
  let component: ProdutoListComponent;
  let fixture: ComponentFixture<ProdutoListComponent>;

  let produtoService: ProdutoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProdutoListComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ],
      providers: [
        ProdutoService,
        { provide: ActivatedRoute, useValue: activatedRouteMock },  
      ]
    });
    fixture = TestBed.createComponent(ProdutoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve abrir a modal pra criar produto', () => {
    spyOn(component.modalService, 'open');
    
    component.adicionar({});
    
    expect(component.modalService.open).toHaveBeenCalledOnceWith({}, { size: 'lg' });
  });

  it('deleta fi', () => {
    spyOn(component.produtoService, 'delete').and.returnValue(of([]));

    const produto = { id: 1, nome: 'Produto Teste', preco: 10.0 };

    component.deletar(produto.id);

    expect(component.produtoService.delete).toHaveBeenCalledWith(produto.id);
    expect(component.lista).toEqual([]); 
  });

  
});
