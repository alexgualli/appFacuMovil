import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from 'src/app/services/serviceActivity/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  public activity: any;
  public visible: Boolean;
  constructor(private activatedRoute: ActivatedRoute, private service: ActivityService) {
    this.activity = {}
    this.visible = true;
  }

  ngOnInit() {

    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.service.getById(id).subscribe((res: any) => {
      this.activity = res.activity;
      this.visible = true;
      if (this.activity.requireInscription) {
        if (this.activity.quota != 0) {
          this.visible = false;
        }
      }
    })

  }


}
