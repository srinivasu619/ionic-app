import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

/**
 * Generated class for the CompaniesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-companies',
  templateUrl: 'companies.html',
})
export class CompaniesPage {
  public companies : any

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.apiProvider.getCompanies().subscribe(companyList => {
      this.companies = companyList;
    });
  }
  openDetails(company){
    this.navCtrl.push('CompanyProfilePage', {company: company});
  }
  newCompany(){
    this.navCtrl.push('NewCompanyPage');
  }

}
