import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent  {
 @Input() isLightOn!: boolean
  

}
