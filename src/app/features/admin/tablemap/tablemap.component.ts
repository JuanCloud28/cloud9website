import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ModalComponent } from 'src/app/core/modal/modal.component';
import { SseService } from 'src/app/services/sse.service';

@Component({
  selector: 'app-tablemap',
  templateUrl: './tablemap.component.html',
  styleUrls: ['./tablemap.component.scss']
})
export class TablemapComponent implements OnInit, OnDestroy {

  private sseStream: Subscription;
  messages: Array<any> = [];

  constructor(private sseService: SseService, public dialog: MatDialog) {

    this.sseStream = this.sseService.observeMessages('https://cloud9-assistance.onrender.com/assistance/sse')
      .subscribe(message => {
        let logObject = JSON.parse(message);
        logObject.date = new Date();
        this.playAudio();
        this.openDialog(logObject);
        this.wichTable(logObject.tableId)
        this.messages.push(logObject);
      });
  }

  ngOnInit(): void {

  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/sound/assistance-sound.mp3";
    audio.load();
    audio.play();
  }

  openDialog(data: any): void {
    this.dialog.open(ModalComponent, {
      data: {id: data.id, tableId: data.tableId},
    });
  }

  wichTable(id: string){
    let table = document.getElementById(`table-${id}`);
    if(table){
      table.style.backgroundColor = "#52bbbb"
      setTimeout(() => {
        if(table)
        table.style.backgroundColor = "#18081E"
      }, 30000);
    }
    
  }



  ngOnDestroy(): void {
    if (this.sseStream) {
      this.sseStream.unsubscribe();
    }
  }

}
