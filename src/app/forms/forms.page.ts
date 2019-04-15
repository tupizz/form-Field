import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import * as faker from 'faker';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  public profileForm: FormGroup;
  public contactForm: FormGroup;
  public nickname = new FormControl();

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  randomName() {
    const randomName = faker.name.findName();
    const randomAdress = faker.address.streetName();

    this.nickname.setValue(randomName);
    this.contactForm.controls['address'].setValue(randomAdress);
  }

  ngOnInit() {
    // Utilizando um FormGroup e FormControl
    this.profileForm = new FormGroup({
      firstName: new FormControl('Field Control'),
      lastName: new FormControl('')
    });

    // These are factory methods for generating instances in your component classes including form controls, form groups, and form arrays.
    this.contactForm = this._formBuilder.group({
      address: 'Rua Cristóvão Colombo, 2820',
      phone: '',
      state: ''
    });
  }

  updateAdressInfo() {
    this.contactForm.patchValue({
      address: '<!-- Rua cristovão colombo 2820 --->',
      phone: '+5517995151424'
    });
  }

}
