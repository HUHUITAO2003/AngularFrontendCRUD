import { Component, OnInit } from '@angular/core';
import { Employees } from '../types/Employees';
import { DataService } from '../data.service';
import { Dati } from '../types/Dati';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = dati.employee;
}

export class TableComponent implements OnInit {
  poi: Employees[] = [];
  dati: Dati = new Dati(1,this.poi);
  readonly : boolean = true;
  username: string = '';
  buttontext : string = 'Modifica';
  modifyID: number = -1;

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(dati => this.dati = dati)
  }

  elimina = (index: number) => {
    this.dati.employees.splice(index, 1);
  }

  modifica = (i : number) => {
    this.modifyID = i;
  }

  conferma = () =>{
    this.modifyID = -1;
  }


  closeEdit = () => {
  }

  post = (employee: Employees) => {
    this.dati['employees'].push(employee);
    console.log(this.dati);
  }

}
