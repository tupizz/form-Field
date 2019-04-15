import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacaoPage } from './validacao.page';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('ValidacaoPage', () => {
  let component: ValidacaoPage;
  let fixture: ComponentFixture<ValidacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ValidacaoPage],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[form] should be invalid', async(() => {
    component.profileGroup.controls['email'].setValue('');
    component.profileGroup.controls['name'].setValue('');
    expect(component.profileGroup.valid).toBeFalsy();

    // update view, once the values are entered
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('#submit-btn'));  // fetch button element
    expect(btn.nativeElement.disabled).toBeTruthy();  // check if it is disabled
  }));

  it('[form] should be invalid when user inputs an invalid age and must have the message error of valid Age', async(() => {
    component.profileGroup.controls['age'].setValue('29');
    console.log(component.profileGroup.controls['age'].errors);
    expect(component.profileGroup.controls['age'].errors).toEqual({
      validAge: true
    });
  }));

  it('[form] should be valid', async(() => {
    component.profileGroup.controls['name'].setValue('Tadeu Tupinambá');
    component.profileGroup.controls['email'].setValue('tadeu@gmail.com');
    component.profileGroup.controls['age'].setValue('18');
    expect(component.profileGroup.valid).toBeTruthy();

    // update view, once the values are entered
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('#submit-btn'));  // fetch button element
    expect(btn.nativeElement.disabled).toBeFalsy();  // check if it is disabled
  }));
});
