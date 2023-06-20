import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TablemapComponent } from './tablemap/tablemap.component';
import { RouterModule, Routes } from '@angular/router';
import { SseService } from 'src/app/services/sse.service';

const routes: Routes = [
  { path: 'tablemap', component: TablemapComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    TablemapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [SseService],
  exports: [
    LoginComponent,
    TablemapComponent
  ]
})
export class AdminModule { }
