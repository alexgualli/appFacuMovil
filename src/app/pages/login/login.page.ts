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

  constructor(private modalController: ModalController,
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
    this.user.emailAddress = form.value.email;
    this.user.password = form.value.password;
    this.authService.login(this.user.rememberMe, this.user.emailAddress, this.user.password).subscribe(
      (res: any) => {
        if (res.logged === true) {
          this.alertService.presentToast(`Bienvenido ${res.user.firstName}`, 'success');
          this.navCtrl.navigateForward(['/events']);
        }
      },
      (err: any) => {
        if (err.statusText === 'Unauthorized')
          this.alertService.presentToast('Email o Contraseña Incorrectos', 'danger');
      }
    );
  }

}
