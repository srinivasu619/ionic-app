import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  getStudents(){
    this.navCtrl.push('StudentsPage');
  }
  getCompanies(){
    this.navCtrl.push('CompaniesPage');
  }

}
