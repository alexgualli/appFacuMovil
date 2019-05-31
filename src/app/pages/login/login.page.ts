import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/serviceUser/user-service.service';
import { AlertServiceService } from 'src/app/services/serviceAlert/alert-service.service';
import { NavController, ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

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
  login(form: NgForm) {
    console.log(form.value.email +'  '+ form.value.password);
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        this.alertService.presentToast("Welcome");
      },
      error => {
        console.log(error);
      },
      () => {
        this.dismissLogin();
        this.navCtrl.navigateRoot('/events');
      }
    );
  }

}
