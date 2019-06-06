import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/serviceUser/user-service.service';
import { AlertServiceService } from 'src/app/services/serviceAlert/alert-service.service';
import { NavController, ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import User from '../entity/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private modalController: ModalController,
    private authService: UserServiceService,
    private navCtrl: NavController,
    private alertService: AlertServiceService) { }

  ngOnInit() {
  }

  dismissLogin() {
    this.modalController.dismiss();
  }
  user: User = new User();
  login(form: NgForm) {
    this.user.emailAddress=form.value.email;
    this.user.password=form.value.password;
    this.authService.login(this.user.rememberMe,this.user.emailAddress,this.user.password).subscribe(
     (user:any) => {
       console.log('user: '+user);
       this.navCtrl.navigateForward(['/events']);
      },
      error => {
        
        if(error.status == 200){
          this.alertService.presentToast('Bienvenido','success');
          this.navCtrl.navigateForward(['/events']);          
        }
        else{
          this.alertService.presentToast('Email o Password Incorrecto','danger');
        }
      }
    );
  }

}
