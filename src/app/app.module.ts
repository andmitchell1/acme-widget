import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { PersonService } from './services/person.service';
import { SignupPersonComponent } from './signup-person/signup-person.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupPersonComponent,
    ListPersonsComponent,
    ListPersonsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),   
    AngularFireDatabaseModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([      
      { 
        path: '', 
        component: SignupPersonComponent
      }, 
      { 
        path: 'signup-person/:id', 
        component: SignupPersonComponent
      },    
      { 
        path: 'list-persons', 
        component: ListPersonsComponent
      },          
    ]),
    DataTablesModule,
    
  ],
  providers: [
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
