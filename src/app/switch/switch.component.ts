import { Component, Output, EventEmitter} from '@angular/core';
import { SwitchService } from '../switch.service';
@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent  {

  constructor(private switchService: SwitchService) { }

  @Output() switchLight = new EventEmitter<Event>();
 toggleLight(){
   this.switchService.switchLight()

 }
}
