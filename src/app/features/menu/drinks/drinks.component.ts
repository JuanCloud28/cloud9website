import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { drink_type } from 'src/app/core/enum/drinks';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent {

  position = 0;
  constructor(private router: Router){
    
  }

  up(){
    if(this.position>0){
      this.position--;
      var section = document.getElementById("section-"+(this.position+1));
      section?.scrollIntoView({ behavior: "smooth"});
    }
  }

  home(){
   this.router.navigate(['/']);
  }

  down(){
    if(this.position < (drink_type.smooth)){
      this.position++;
      var section = document.getElementById("section-"+(this.position+1));
      section?.scrollIntoView({ behavior: "smooth"});
    }
  }
}
