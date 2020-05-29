import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  constructor(private db: AngularFireDatabase) { }
  person: AngularFireList<Person>;
  persons: Observable<any[]>;

  create(person) {  
      return this.db.list('/persons').push(person);
  }

  update(personId, person) {
    return this.db.object('/persons/' + personId).update(person);
  }
  
  get(personId: string) {
    return this.db.object('/persons/' + personId);
  }

  getAll() {    
    this.person = this.db.list('/persons');
    this.persons = this.person.snapshotChanges().pipe(
      map(res => res.map(c => ({ key: c.payload.key, ...c.payload.val() 
    }))
   ));
    return this.persons;
  } 

  getEmpty() {
    const person: Partial<Person> = {};
    return person;
  }

}