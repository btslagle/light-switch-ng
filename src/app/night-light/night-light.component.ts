import { Component } from '@angular/core';
import { SwitchComponent } from '../switch/switch.component';
@Component({
  selector: 'app-night-light',
  templateUrl: './night-light.component.html',
  styleUrls: ['./night-light.component.css']
})
export class NightLightComponent  {

  constructor(private switchService: SwitchService) { }

  @Output() switchLight = new EventEmitter<Event>();
 toggleLight(){
   this.switchService.switchLight()

 }
 }

  
}
