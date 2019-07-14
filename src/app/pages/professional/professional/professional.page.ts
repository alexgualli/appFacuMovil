import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessionalService } from 'src/app/services/serviceProfessional/professional.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.page.html',
  styleUrls: ['./professional.page.scss'],
})
export class ProfessionalPage implements OnInit {

  public professional: any;
  constructor(private activatedRoute: ActivatedRoute, private service: ProfessionalService) {
    this.professional = {}
  }

  ngOnInit() {


    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.service.getById(id).subscribe((res: any) => {
      this.professional = res.professional;
      //this.visible = true;
    })
  }

}
