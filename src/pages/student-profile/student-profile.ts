import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

/**
 * Generated class for the StudentProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-profile',
  templateUrl: 'student-profile.html',
})
export class StudentProfilePage {

  student : any

  constructor(public apiProvider: ApiProvider,public navCtrl: NavController,public http: HttpClient, public navParams: NavParams) {
    this.student = this.navParams.get('student');
    console.log(this.student);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentProfilePage');
  }
  edit(){
    this.navCtrl.push('EditStudentPage',{student: this.student});
  }
  deleteStudent(){
    console.log("delete student")
    this.http.post('http://localhost:3000/api/student/remove/'+this.student._id,{}).subscribe(data => console.log(data));
    this.navCtrl.popToRoot();
  }
  placementRegisteration(){
    this.navCtrl.push('PlacementRegisterationPage',{student: this.student});
  }

}
