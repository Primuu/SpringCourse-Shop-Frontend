import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageadminComponent } from './fullpageadmin.component';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class FullpageadminModule { }
