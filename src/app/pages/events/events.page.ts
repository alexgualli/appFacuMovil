import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/serviceEvent/event.service';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

import { Dialogs } from '@ionic-native/dialogs/ngx'

import { ModalController, Platform, MenuController } from '@ionic/angular';



@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  qrScan: any;
  events: any[];
  eventsFilter: any[];
  constructor(
    public platform: Platform,
    public dialog: Dialogs,
    private qrScanner: QRScanner,
    public modalController: ModalController,
    private eventService: EventService,
    private menu: MenuController
  ) {

  this.platform.backButton.subscribeWithPriority(0, () => {
      document.getElementsByTagName("body")[0].style.opacity = "1";
      this.qrScan.unsubscribe();
    })
  }

  ngOnInit() {
    this.events = [];
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAllEvents()
      .subscribe((res: any) => {
        this.events = res
        this.eventsFilter = res

      })
  }

  qr: string = 'No hay nada';

  scan() {
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        this.qrScanner.show();
        document.getElementsByTagName("body")[0].style.opacity = "0";
        this.qrScan = this.qrScanner.scan().subscribe((textFound) => {
          document.getElementsByTagName("body")[0].style.opacity = "1";
          this.qrScan.unsubscribe();
          this.dialog.alert(textFound);
          this.qr = textFound;
        }, (err) => {
          this.dialog.alert(JSON.stringify(err));
        })
      }
      else
      {
        if (status.denied) {
          this.dialog.alert("textFound");
        }
      }
    })
  }
  searchTerm : any="";
  jsonData : any;
  
  setFilteredItems() {
 
    this.events = this.filterItems(this.searchTerm);

}

  
  filterItems(searchTerm){  
    this.events = this.eventsFilter
    return this.events.filter((item) => {
         return item.name.toLowerCase().includes(searchTerm.toLowerCase());
     });  
 }

  openFirst() {
    this.menu.open('first');
  }
}
