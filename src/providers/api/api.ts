import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  public data: any;

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  getStudents() {
    return this.http.get('http://localhost:3000/api/students');
  }
  getCompanies() {
    return this.http.get('http://localhost:3000/api/companies');
  }
  postStudent(studentData) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/api/student/new', studentData);
  }
  editStudent(studentData,id) {
    return this.http.put('http://localhost:3000/api/student/edit/'+id, studentData);
  }
  deleteStudent(id) {
    console.log('http://localhost:3000/api/student/remove/'+id);
    return this.http.post('http://localhost:3000/api/student/remove/' + id,{});
  }
  postCompany(companyData) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/api/company/register', companyData);
  }
  deleteCompany(company) {
    return this.http.delete('http://localhost:3000/api/company/remove/' + company._id);
  }
}
