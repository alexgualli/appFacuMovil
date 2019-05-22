import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/serviceEvent/event.service';



import { ModalController } from '@ionic/angular';
import {ModalImagePage} from '../modal-image/modal-image.page'; 



@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  eventos: any[];
  constructor(public modalController: ModalController,private eventService: EventService) { }

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


  
  
}