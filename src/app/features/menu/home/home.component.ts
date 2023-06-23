import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assistance } from 'src/app/core/interfaces/assistance';
import { AssistanceService } from 'src/app/services/assistance.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private tableId = 0;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private assistanceService: AssistanceService) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['table']) // table number
        localStorage.setItem('tableId', params['table'])        
        this.getTableId()
    })
  }

  getTableId(){
    try {
      let tableNum = localStorage.getItem('tableId');
      this.tableId = Number.parseInt(tableNum == null ? '0' : tableNum);
    } catch (error) {
      console.error('tableId is missing, using default value')
    }
  }
  shishaOption() {
    this.router.navigate(['/shisha']);
  }

  coffeeOption() {
    this.router.navigate(['/coffee']);
  }

  drinkOption() {
    this.router.navigate(['/drink-options']);
  }

  waffleOption() {
    this.router.navigate(['/waffles']);
  }

  getAssistance(id: any) {
    let assistance: Assistance = new Assistance(Number(id), this.tableId)
    this.assistanceService.askAssistance('https://cloud9-assistance.onrender.com/assistance', assistance).subscribe(response => {
      console.log(response);
    })
  }
}
