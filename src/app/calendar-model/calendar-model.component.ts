import { Component, OnInit } from '@angular/core';
import { MaterialModule} from '../material.module';

@Component({
  selector: 'app-calendar-model',
  templateUrl: './calendar-model.component.html',
  styleUrls: ['./calendar-model.component.css']
})


export class CalendarModelComponent implements OnInit {

  constructor() { }
  MaterialModule (){
    
  }
  ngOnInit() {
  }

}
export class DatepickerMinMaxExample {
  minDate = new Date(1970, 0, 1);
  maxDate = new Date(2020, 0, 1);
}
