import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewStudentPage } from './new-student';

@NgModule({
  declarations: [
    NewStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(NewStudentPage),
  ],
})
export class NewStudentPageModule {}
