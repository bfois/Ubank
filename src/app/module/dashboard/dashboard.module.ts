import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoUserComponent } from './info/infoUser.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    InfoUserComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
