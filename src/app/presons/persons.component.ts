import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PersonsService } from "./persons.service";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  isFetching = false;
  private personListSubs: Subscription

  constructor(private prsService: PersonsService){
    // this.personList = prsService.persons;
    // this.personService = prsService;
  }

  ngOnInit() {
    this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.prsService.fetchPersons();
  }

  onRemovePerson(person: string) {
    this.prsService.removePerson(person);
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}