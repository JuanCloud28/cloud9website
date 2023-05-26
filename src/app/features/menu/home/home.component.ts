import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router){
    
  }

  shishaOption(){
    this.router.navigate(['/shisha']);
  }

  coffeeOption(){
    this.router.navigate(['/coffee']);
  }

  drinkOption(){
    this.router.navigate(['/drink-options']);
  }
  
  waffleOption(){
    this.router.navigate(['/waffles']);
  }
}
