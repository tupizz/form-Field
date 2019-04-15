import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateAge } from './validators/ageValidator';

@Component({
  selector: 'app-validacao',
  templateUrl: './validacao.page.html',
  styleUrls: ['./validacao.page.scss'],
})
export class ValidacaoPage implements OnInit {

  profileGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.profileGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', { updateOn: 'blur', validators: [Validators.required, Validators.email] }],
      age: ['', [ValidateAge]],
      address: this._formBuilder.group({
        street: [''],
        city: [''],
        state: ['']
      }),
    });
  }

}
