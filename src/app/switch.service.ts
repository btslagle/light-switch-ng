import { Injectable, Input, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }
  
  @Input() switchLight = new EventEmitter<Event>();
  
  isLightOn = false;
  
  switchLightMethod(){
    if (this.isLightOn === false){
      this.isLightOn = true;
    } else
    this.isLightOn = false;
  }

}
