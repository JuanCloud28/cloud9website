import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TablemapComponent } from './tablemap/tablemap.component';



@NgModule({
  declarations: [
    LoginComponent,
    TablemapComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
