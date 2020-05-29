import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { Person } from '../models/person';
import { PersonService } from './../services/person.service';

@Component({
  selector: 'list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.scss']
})
export class ListPersonsComponent {
  persons: Person[];
  subscription: Subscription;
  dtOptions: DataTables.Settings = {};

  constructor(
    private personService: PersonService    
  ) 
  {
    this.subscription = this.personService.getAll()
    .subscribe(p => this.persons = p)
  }
}
