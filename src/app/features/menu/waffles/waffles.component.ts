import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waffles',
  templateUrl: './waffles.component.html',
  styleUrls: ['./waffles.component.scss']
})
export class WafflesComponent {

  constructor(private router: Router){
    
  }

  home(){
    this.router.navigate(['/']);
   }
}
