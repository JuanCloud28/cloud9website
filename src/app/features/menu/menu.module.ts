import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShishaComponent } from './shisha/shisha.component';
import { CoffeComponent } from './coffe/coffe.component';
import { DrinksComponent } from './drinks/drinks.component';
import { WafflesComponent } from './waffles/waffles.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shisha', component: ShishaComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    ShishaComponent,
    CoffeComponent,
    DrinksComponent,
    WafflesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    HomeComponent,
    ShishaComponent
  ]
})
export class MenuModule { }
