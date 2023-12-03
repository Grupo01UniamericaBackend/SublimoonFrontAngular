import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteComponent } from './cliente.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Cliente } from '../models/cliente';

describe('ClienteComponent', () => {
  let component: ClienteComponent;
  let fixture: ComponentFixture<ClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    const cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'ana';
    cliente.telefone = '45-9999-4533';
    cliente.cpf= '06773080940'
  
    component.cliente = cliente;
    fixture.detectChanges(); 

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
