import { Employees } from "./Employees";

export class Dati {    
    
    constructor(public nextID: number = 1, 
        public employees: Employees[] = []
        ) {

        }
}
