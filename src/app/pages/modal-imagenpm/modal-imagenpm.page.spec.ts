import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImagenpmPage } from './modal-imagenpm.page';

describe('ModalImagenpmPage', () => {
  let component: ModalImagenpmPage;
  let fixture: ComponentFixture<ModalImagenpmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalImagenpmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalImagenpmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
