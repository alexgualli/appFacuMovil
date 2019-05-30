import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/serviceEvent/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventDetails',
  templateUrl: './eventDetails.page.html',
  styleUrls: ['./eventDetails.page.scss'],
})
export class EventDetailsPage implements OnInit {

  public event: any;
  public visible: boolean=true;
  constructor(private activatedRoute: ActivatedRoute, private service: EventService) {
    this.event = {}
  }

  ngOnInit() {
    if (parseInt(this.activatedRoute.snapshot.paramMap.get('id')) != null) {
      let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
      this.service.getById(id).subscribe((res: any) => {
        this.event = res.event;
        this.visible=true;
      })
    } else {
      let id = this.activatedRoute.snapshot.paramMap.get('qr');
      this.service.getByQr(id).subscribe((res: any) => {
        this.event = res.event;
        this.visible=false;
      })
    }
  }

}
