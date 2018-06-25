import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiProvider } from './../../providers/api/api';

/**
 * Generated class for the NewCompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-company',
  templateUrl: 'new-company.html',
})
export class NewCompanyPage {
  private companyForm : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,public apiProvider : ApiProvider) {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z][A-Za-z\\s]+$')])],
      jobDesignation: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z][A-Za-z\\s]+$')])],
      cutoff: ['',Validators.compose([Validators.required,Validators.min(0.0),Validators.max(10.0)])],
      contact: ['',Validators.required],
      permanentAddress: ['',Validators.required],
      email: ['',Validators.compose([Validators.required,Validators.email])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCompanyPage');
  }
  logForm(){
    console.log(this.companyForm.value);
    this.apiProvider.postCompany(this.companyForm.value).subscribe((res)  => {
      console.log(res);
    });
    this.navCtrl.popToRoot()
  }

}
