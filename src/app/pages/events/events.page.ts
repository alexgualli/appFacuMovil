import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/serviceEvent/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  eventos: any[];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventos = [];
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAllEvents()
      .subscribe((result: any) => {
        for (var i = 0; i < result.length; i++) {
          var evento = result[i];
          this.eventos.push(evento);
        }
      })
  }

}
