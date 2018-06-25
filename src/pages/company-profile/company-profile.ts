import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
/**
 * Generated class for the CompanyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-profile',
  templateUrl: 'company-profile.html',
})
export class CompanyProfilePage {
  company : any
  constructor(public navCtrl: NavController, public navParams: NavParams,public http : HttpClient) {
    this.company = this.navParams.get('company');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyProfilePage');
  }

  deleteCompany(){
    console.log("delete company")
    this.http.delete('http://localhost:3000/api/company/remove/'+this.company._id).subscribe(data => console.log(data));
    this.navCtrl.popToRoot();
  }

}
