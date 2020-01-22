import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title:string = 'TODOMOTO MOTOPARTS';
  selectedValue: string;

  employees = [
    {'name': 'Carlos', possition: 'manager' },
    {'name': 'Juan', possition: 'services' },
    {'name': 'Carlos', possition: 'sales' }
  ];
}
