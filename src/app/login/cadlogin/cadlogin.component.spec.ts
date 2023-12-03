import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadloginComponent } from './cadlogin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CadloginComponent', () => {
  let component: CadloginComponent;
  let fixture: ComponentFixture<CadloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadloginComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(CadloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
