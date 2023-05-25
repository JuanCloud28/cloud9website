import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffe',
  templateUrl: './coffe.component.html',
  styleUrls: ['./coffe.component.scss']
})
export class CoffeComponent {

  constructor(private router: Router){
    
  }

  home(){
    this.router.navigate(['/']);
   }

}
