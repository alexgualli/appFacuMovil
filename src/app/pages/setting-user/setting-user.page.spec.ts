import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingUserPage } from './setting-user.page';

describe('SettingUserPage', () => {
  let component: SettingUserPage;
  let fixture: ComponentFixture<SettingUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
