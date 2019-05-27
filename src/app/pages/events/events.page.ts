import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/serviceEvent/event.service';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

import {Dialogs} from '@ionic-native/dialogs/ngx'

import { ModalController, Platform } from '@ionic/angular';
import {ModalImagePage} from '../modal-image/modal-image.page'; 



@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  qrScan:any;
  eventos: any[];
  constructor(public platform:Platform,public dialog:Dialogs,private qrScanner: QRScanner,public modalController: ModalController,private eventService: EventService) { 
    /*this.platform.backButton.subscribeWithPriority(0,()=>{
      document.getElementsByTagName("body")[0].style.opacity="1";
      this.qrScan.unsubscribe();
    })*/
  }

  ngOnInit() {
    this.eventos = [];
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAllEvents()
      .subscribe((res: any) => {
        for (var i = 0; i < res.length; i++) {
          var evento = res[i];
          console.log(evento)
          this.eventos.push(evento);
        }
      })
  }

  

  scan(){
    this.qrScanner.prepare().then((status:QRScannerStatus)=>{
      if(status.authorized){
        this.qrScan.show();
         // document.getElementsByTagName("body")[0].style.opacity="0";
          this.qrScan=this.qrScanner.scan().subscribe((textFound)=>{
          //document.getElementsByTagName("body")[0].style.opacity="1";
          this.qrScan.unsubscribe();
          this.dialog.alert(textFound);
          },(err)=>{
            this.dialog.alert(JSON.stringify(err));
          })
      }
      else{
        if(status.denied){
          this.dialog.alert("textFound");

        }

      }
    })
  }


  
  
}
