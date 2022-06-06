import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Employees } from '../types/Employees';
import { Dati } from '../types/Dati';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  employees: Employees[] = [];
  dati: Dati = new Dati(1,this.employees);
  
  constructor(private data : DataService) {
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(dati => this.dati = dati)
  }


  post = (firstName: string, lastName: string, gender: string, hireDate: string, birthDate: string) => {
    let employee: Employees = new Employees(this.dati.nextID, firstName, lastName, gender, hireDate, birthDate);
    this.dati.nextID++;
    console.log(this.dati.nextID)
    this.dati['employees'].push(employee);
  }

}
