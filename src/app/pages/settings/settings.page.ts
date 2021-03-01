import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  customActionSheetOptions: any = {
    header: 'Please Select One',
  };

  constructor(public platform: Platform, private alertController: AlertController, private route: Router) { }

  ngOnInit() {

  }

  public devWidth = this.platform.width()

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
