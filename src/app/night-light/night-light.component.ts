import { Component } from '@angular/core';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-night-light',
  templateUrl: './night-light.component.html',
  styleUrls: ['./night-light.component.css']
})
export class NightLightComponent  {

  constructor(private switchService: SwitchService) {}

  isLightOn = this.switchService.isLightOn;

  toggleLight() {
    this.switchService.switchLightMethod();
    this.isLightOn = this.switchService.isLightOn;
  }
}
