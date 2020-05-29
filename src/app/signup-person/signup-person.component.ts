import { PersonService } from './../services/person.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'signup-person',
  templateUrl: './signup-person.component.html',
  styleUrls: ['./signup-person.component.scss']
})
export class SignupPersonComponent implements OnInit {

  id;
  person;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personService: PersonService
    ) 
    { 
      this.person = personService.getEmpty(); 
      this.person.firstname = ""; 
      this.person.lastname = ""; 
      this.person.email = "";
      this.person.activity = "";
      this.person.comments = ""; 
      
      this.id = this.route.snapshot.paramMap.get('id');

      if (this.id) {
        this.personService.get(this.id).valueChanges().pipe(take(1)).subscribe(p => this.person = p);        
      }
    }

  ngOnInit(): void {
  }

  save(person) {
    if (this.id) 
      this.personService.update(this.id, person);
    else    
      this.personService.create(person); 

    this.router.navigate(['/list-persons']);
  } 

}

