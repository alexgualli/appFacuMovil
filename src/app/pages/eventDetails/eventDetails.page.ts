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
  qr:string;
  id:string;
  ngOnInit() {

    this.qr=this.activatedRoute.snapshot.paramMap.get('id');
    this.id=this.activatedRoute.snapshot.paramMap.get('id');

    if (this.activatedRoute.snapshot.paramMap.get('id') != '') {

      let id = this.activatedRoute.snapshot.paramMap.get('id');
      this.service.getByQr(id).subscribe((res: any) => {
        this.event = res.event;
        this.visible=false;
      })
    }
      
     if(parseInt(this.activatedRoute.snapshot.paramMap.get('id')) > 0){
      let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
      this.service.getById(id).subscribe((res: any) => {
        this.event = res.event;
        this.visible=true;
      })
    }
  
  }
}

