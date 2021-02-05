import { Component } from "@angular/core";
import { PersonsService } from "./persons.service";

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.scss']
})
export class PersonsInputComponent {
  enteredPersonName = '';

  constructor(private personService: PersonsService){}

  onCreatePerson() {
    console.log('Created a person: ' + this.enteredPersonName);
    this.personService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}