import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Dati } from "./types/Dati";
import { Employees } from "./types/Employees";

@Injectable()
export class DataService{
  
  private messageSource = new BehaviorSubject<Dati>(new Dati (10006, [new Employees(
    10001,
    "1953-09-01",
    "Georgi",
    "Facello",
    "M",
    "1986-06-25",
  ),
  new Employees(
    10002,
    "1964-06-01",
    "Bezalel",
    "Simmel",
    "F",
    "1985-11-20",
  ),
  new Employees(
    10003,
    "1959-12-02",
    "Parto",
    "Bamford",
    "M",
    "1986-08-27",
  ),
  new Employees(
    10004,
    "1954-04-30",
    "Chirstian",
    "Koblick",
    "M",
    "1986-11-30",

  ),
  new Employees(
    10005,
    "1955-01-20",
    "Kyoichi",
    "Maliniak",
    "M",
    "1989-09-11",
  )

  ]));
  currentMessage = this.messageSource.asObservable();

  constructor(){}

  changeMessage(dati : Dati){
    this.messageSource.next(dati);
  }
}