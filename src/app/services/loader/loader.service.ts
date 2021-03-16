import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public loadingController: LoadingController) { }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 1500,
      message: 'Loading..',
    });
    await loading.present();
  }
}
