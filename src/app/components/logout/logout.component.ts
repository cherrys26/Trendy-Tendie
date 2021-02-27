import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(public route: Router, public alertController: AlertController) { }

  ngOnInit() { }

  async navigateToWelcome() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: "Okay  :'(",
          handler: () => {
            this.route.navigate([''])
          }
        }
      ]
    });

    await alert.present();
  }
}

