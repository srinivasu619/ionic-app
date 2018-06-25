import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms'
import { ApiProvider } from './../../providers/api/api';

/**
 * Generated class for the EditStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-student',
  templateUrl: 'edit-student.html',
})
export class EditStudentPage {

  studentForm : FormGroup;
  student : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder,public apiProvider:ApiProvider) {
    this.student = this.navParams.get('student');
  	this.studentForm = formBuilder.group({
      firstName: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      lastName : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      department : ['',Validators.required],
      enrollmentNo : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9]{11}$')])],
      cgpa : ['',Validators.compose([Validators.required,Validators.min(0.0),Validators.max(10.0)])],
      permanentAddress : ['',Validators.required],
      email : ['',Validators.compose([Validators.required,Validators.email])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewStudentPage');
  }
  sendDetails(){
    console.log(this.studentForm.value);
    this.apiProvider.editStudent(this.studentForm.value,this.student._id).subscribe((res)  => {
      console.log(res);
    });
    this.navCtrl.popToRoot();
  }

}
