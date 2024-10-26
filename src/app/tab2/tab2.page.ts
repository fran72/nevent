import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { EventInfo } from '../models/event';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  event!: EventInfo;
  date!: string;
  fullName!: string;
    
  constructor(
    public modalController: ModalController,
    private navParams: NavParams,
  ) {}

  ngOnInit() {
    if( this.navParams.get('event')) this.event = this.navParams.get('event');
    if( this.navParams.get('date')) this.date = this.navParams.get('date');
    if( this.navParams.get('fullName')) this.fullName = this.navParams.get('fullName');
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
