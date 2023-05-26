import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drink-options',
  templateUrl: './drink-options.component.html',
  styleUrls: ['./drink-options.component.scss']
})
export class DrinkOptionsComponent {

  constructor(private router: Router){
    
  }

  drinksOption(){
    this.router.navigate(['/drinks']);
  }

  home(){
    this.router.navigate(['/']);
   }
}
