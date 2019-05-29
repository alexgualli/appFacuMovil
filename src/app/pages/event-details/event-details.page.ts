import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/serviceEvent/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {

  public event: any;
  constructor(private activatedRoute: ActivatedRoute, private service: EventService) {
    this.event = {}
  }

  ngOnInit() {

    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.service.getById(id).subscribe((res: any) => {
      this.event = res.event;
    })
  }

}
