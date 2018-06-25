import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

/**
 * Generated class for the PlacementRegisterationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-placement-registeration',
  templateUrl: 'placement-registeration.html',
})
export class PlacementRegisterationPage {

  public companies: any;
  public student: any;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider, public navParams: NavParams,public http:HttpClient) {
    this.student = this.navParams.get('student');
  }

  ionViewDidLoad() {
    this.comapnies();
  }
  comapnies() {
    this.apiProvider.getCompanies().subscribe(companyList => {
      this.companies = companyList;
    });
  }
  search(student,company) {
    for (var i = 0; i < company.students.length; i++) {
      if (company.students[i]._id === student._id) {
        return true;
      }
    }
    return false;
  }
  register(student,company){
    let url :string ="http://localhost:3000/api/student/"+student._id+"/register?companyId="+company._id;
    console.log(url);
    this.http.post(url, {}).subscribe(data => console.log(data));
    this.comapnies();
    this.navCtrl.pop();
  }
  unregister(student,company){
    let url :string ="http://localhost:3000/api/student/"+student._id+"/unregister?companyId="+company._id;
    console.log(url);
    this.http.delete(url).subscribe(data => console.log(data));
    this.comapnies();
    this.navCtrl.pop();
  }

}
