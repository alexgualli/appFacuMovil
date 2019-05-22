import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/serviceEvent/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.page.html',
  styleUrls: ['./modal-image.page.scss'],
})
export class ModalImagePage implements OnInit {

  image:any;
 
  constructor(
    private service:EventService,
    private activatedRoute: ActivatedRoute
  ) { }
 
  ngOnInit() {
    let id=this.activatedRoute.snapshot.paramMap.get('id');
    
    this.service.getById(parseInt(id)).subscribe((res:any)=>{
      this.image=res;
    })
  }
 

}
