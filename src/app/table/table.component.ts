import { Component, OnInit } from '@angular/core';
import { Employees } from '../types/Employees';
import { DataService } from '../data.service';
import { Dati } from '../types/dati';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
  poi: Employees[] = [];
  dati: Dati = new Dati(1,this.poi);
  readonly : boolean = true;
  username: string = '';
  buttontext : string = 'Modifica'


  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(dati => this.dati = dati)
  }

  elimina = (index: number) => {
    this.dati.employees.splice(index, 1);
  }

  modifica = () => {
    this.readonly = !this.readonly;
    switch(this.readonly){
      case true :
        this.buttontext = "Modifica";
        break;

      case false :
        this.buttontext = "Conferma";
        break;
    }
  }


  closeEdit = () => {
  }

  post = (employee: Employees) => {
    this.dati['employees'].push(employee);
    console.log(this.dati);
  }

}
