import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import User from '../entity/user';
import { UserServiceService } from 'src/app/services/serviceUser/user-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user: User = new User();
  myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public userService:UserServiceService
  ) {
    this.myForm = this.createMyForm();
  }

  createUser() {
    this.user.email = this.myForm.value.email;
    this.user.full_name = this.myForm.value.name;
    this.user.password = this.myForm.value.password;
    this.userService.createUser(this.user).subscribe((newUser)=>{
      console.log(newUser);
    })
  }

  private createMyForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
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
