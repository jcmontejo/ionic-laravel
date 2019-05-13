import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(public api: RestApiService,
    public loadingController: LoadingController,
    public route: ActivatedRoute,
    public router: Router) { }
  
  contact: any = {};

  async getContact() {
    
    await this.api.getContactById(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.contact = res;
      }, err => {
        console.log(err);
      });
  }

  async delete(id) {
  
    await this.api.deleteContact(id)
      .subscribe(res => {
        //this.location.back();
      }, err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.getContact();
  }

}
