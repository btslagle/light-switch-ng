import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent  {
  @Input() switchLight = new EventEmitter<string>();
  
  isLightOn = false;
  switchLightMethod(){
    if (this.isLightOn === false){
      this.isLightOn = true;
    } else
    this.isLightOn = false;
  }
}
