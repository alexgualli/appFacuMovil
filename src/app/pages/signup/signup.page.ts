import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  myForm: FormGroup;
  
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    this.myForm = this.createMyForm();
  }
  
  saveData(){
    console.log(this.myForm.value);
  }
  
  private createMyForm(){
    return this.formBuilder.group({
      
      name: ['', Validators.required],
      email: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
    });
  }

  /*
  
            <ion-item>
              <ion-icon name="calendar" item-start></ion-icon>
              <ion-label stacked>Fecha de nacimiento:</ion-label>
              <ion-datetime formControlName="dateBirth" displayFormat="MM-DD-YYYY" placeholder="MM-DD-YYY"></ion-datetime>
            </ion-item>
  */
  public ngOnInit() {
    console.log(this.myForm.value);

  }
}
