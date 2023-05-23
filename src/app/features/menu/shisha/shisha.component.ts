import { Component, OnInit } from '@angular/core';
import * as Flavours from '../../../services/shisha.flavours.json'
import {brand} from '../../../core/interfaces/brand'
import { Router } from '@angular/router';
@Component({
  selector: 'app-shisha',
  templateUrl: './shisha.component.html',
  styleUrls: ['./shisha.component.scss']
})
export class ShishaComponent implements OnInit{

  constructor(private router: Router){
    
  }
  ngOnInit(): void {
  }

  public flavourArray: Array<brand> = JSON.parse('[{"id":"brandAF","name":"al fakher","logo":"src/assets/brands/brand-AF-vector.png","head":[{"name":"clay head","price":"32"},{"name":"apple head","price":"38"}],"flavours":["apple","grape","mint","blueberry","orange","lemon","peach","kiwi","gum","watermelon"]},{"id":"brandAY","name":"aladlya","logo":"src/assets/brands/brand-AF-vector.png","head":[{"name":"clay head","price":"45"},{"name":"apple head","price":"50"}],"flavours":["love","lady killer","god father","joker","sheik money","sunshine day","swiss bon bon","desperado","berlin nights","izimir","blue horse","baki nights","homer simpson","endless flirt","chapolin","caramel"]},{"id":"brandAZ","name":"azure","logo":"src/assets/brands/brand-AF-vector.png","head":[{"name":"clay head","price":"50"},{"name":"apple head","price":"55"}],"flavours":["mexicola","lemon muffin","lychee","alask in ice","route 66","cali blue","white gum bear","plumberry","blue muffin","pina colada","black tea","tropical paradise","apple cider","down under","cinnamon cookies","pep cream","sweet summer sun","cool cucumber","napa grape"]},{"id":"brandET","name":"eternal smoke","logo":"src/assets/brands/brand-AF-vector.png","head":[{"name":"clay head","price":"50"},{"name":"apple head","price":"55"}],"flavours":["fruty bubble","blue lit","watermelon lit","peach lit","dolce banana","red lip"]},{"id":"brandDS","name":"dark side","logo":"src/assets/brands/brand-AF-vector.png","head":[{"name":"clay head","price":"65"}],"flavours":["cola","tropic rav","genesis raspberry","pineaple pulse","ice granny","CYBER KIWI","POLAR CREAM","COSMO","BANANA PAPA","BOUNTY","GRAPE CORE","LEMON BLAST","BLUEBERRY BLAST","SPACE DESSERT","SUOER NOVA","FALLIN STAR","DEEP BLUE SEA","WILD FOREST","RED TEA","MANGO LAST"]},{"id":"brandMH","name":"must have","logo":"src/assets/brands/brand-AF-vector.png","head":[{"name":"clay head","price":"32"}],"flavours":["APPLE DROPS","PINKMAN","MARULA","FROSTY","TROPICAL JUICE","MILKY RICE","BERRY HOLLS","PINEAPPLE RINGS","LEMON LIME","COOKIE","SPACE FLAVOUR","RASPBERRY","PEACH","RUBY GRAPE","PARADISE","CHEESE CAKE (DUFT)"]},{"id":"brandTG","name":"tangiers","logo":"src/assets/brands/brand-AF-vector.png","head":[{"name":"clay head","price":"65"}],"flavours":["CANE MINT","ORANGE SODA","WATERMELON","PEACH ICE TEA"]}]');
  public position = 0;

  up(){
    if(this.position>0){
      this.position--;
      var section = document.getElementById(this.flavourArray[this.position].id);
      console.log(section, "up",this.flavourArray[this.position].id);  
      section?.scrollIntoView()
    }
  }

  home(){
   this.router.navigate(['/']);
  }

  

  down(){
    if(this.position < (this.flavourArray.length-1)){
      this.position++;
      var section = document.getElementById(this.flavourArray[this.position].id);
      console.log(section, "down",this.flavourArray[this.position].id);    
      section?.scrollIntoView()
    }
  }

}
