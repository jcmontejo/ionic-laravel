import { Component } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contactName: string;
  last_nameContact: string;
  phoneContact: string;
  //
  EditName; string;
  EditLastName: string;
  EditPhone: string;
  contacts: any;

  constructor(public api: RestApiService) { }

  async getContacts() {
    await this.api.getContact()
      .subscribe(res => {
        console.log(res);
        this.contacts = res;
        isEdit: false;
      }, err => {
        console.log(err);
      });
  }

  async CreateRecord() {
    let record = {};
    record['name'] = this.contactName;
    record['last_name'] = this.last_nameContact;
    record['phone'] = this.phoneContact;
    await this.api.postContact(record)
      .subscribe(res => {
        // let id = res['id'];
        // this.router.navigate(['/detail/' + id]);
        this.contactName = "";
        this.last_nameContact = "";
        this.phoneContact = "";
        this.getContacts();
      }, (err) => {
        console.log(err);
      });
  }

  EditRecord(record) {
    record.isEdit = true;
    record.id = record.id;
    record.EditName = record.name;
    record.EditLastName = record.last_name;
    record.EditPhone = record.phone;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['name'] = recordRow.EditName;
    record['last_name'] = recordRow.EditLastName;
    record['phone'] = recordRow.EditPhone;
    this.api.updateContact(recordRow.id, record);
    recordRow.isEdit = false;
  }

  RemoveRecord(rowID) {
    this.api.deleteContact(rowID)
      .subscribe(res => {
        // let id = res['id'];
        // this.router.navigate(['/detail/' + id]);
        this.getContacts();
      }, (err) => {
        console.log(err);
      });
  }
  

  ngOnInit() {
    this.getContacts();
  }

}
