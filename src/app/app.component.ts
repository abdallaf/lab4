import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';

  counter:number = 0;
  hide: boolean = true;
  onButtonClick()
{
  console.log("button clicked");
  this.counter++;
}
  onDBLClick(){
    console.log("Look at the star")
    if(this.hide == true){
      this.hide = false;
    }
    else{
      this.hide = true;
    }
  }
}
