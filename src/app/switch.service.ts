import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }
  
  
  isLightOn = false;
  
  switchLightMethod(){
    if (this.isLightOn === false){
      this.isLightOn = true;
    } else
    this.isLightOn = false;
  }

}
