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
    public userService: UserServiceService
  ) {
    this.myForm = this.createMyForm();
  }

  createUser() {
    if (this.myForm.value.password === this.myForm.value.passwordConfirmation) {
      this.user.emailAddress = this.myForm.value.emailAddress;
      this.user.firstName = this.myForm.value.firstName;
      this.user.lastName = this.myForm.value.lastName;
      this.user.password = this.myForm.value.password;
      this.userService.createUser(this.user).subscribe((newUser) => {
        console.log(newUser);
      }
      ,error=>{
        if(error.statusText == 'OK'){
          this.navCtrl.navigateForward(['/login']);
        }
      })
      
    }
    else{
      console.log('Error');
    }
    
  }

  private createMyForm() {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],

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
    
  }
}
