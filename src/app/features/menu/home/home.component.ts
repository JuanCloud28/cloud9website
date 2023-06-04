import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute){
    
  }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
        console.log(params['table']); // table number
    });
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
