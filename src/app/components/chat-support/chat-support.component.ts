import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChatPage } from 'src/app/pages/chat/chat.page';


@Component({
  selector: 'app-chat-support',
  templateUrl: './chat-support.component.html',
  styleUrls: ['./chat-support.component.scss'],
})
export class ChatSupportComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ChatPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}