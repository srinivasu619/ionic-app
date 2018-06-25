import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from './../../providers/api/api';

/**
 * Generated class for the StudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {
  public students: any;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    this.apiProvider.getStudents().subscribe(studentList => {
      this.students = studentList;
    });
  }
  openDetails(student){
    this.navCtrl.push('StudentProfilePage', {student: student});
  }

  addNewStudent(){
    this.navCtrl.push('NewStudentPage')
  }
}
