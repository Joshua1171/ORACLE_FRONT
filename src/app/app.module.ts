import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { LocationsComponent } from './components/locations/locations.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { CountryComponent } from './components/country/country.component';
import { CountryFormComponent } from './components/country/country-form/country-form.component';
import { RegionsComponent } from './components/regions/regions.component';
import { RegionsFormComponent } from './components/regions/regions-form/regions-form.component';
import { LocationsFormComponent } from './components/locations/locations-form/locations-form.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { JobsFormComponent } from './components/jobs/jobs-form/jobs-form.component';
import { DepartmentsFormComponent } from './components/departments/departments-form/departments-form.component';
import { EmployeesFormComponent } from './components/employees/employees-form/employees-form.component';
import { JobhComponent } from './components/jobh/jobh.component';
import { JobhformComponent } from './components/jobh/jobhform/jobhform.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    NavbarComponent,
    IndexComponent,
    CountryComponent,
    CountryFormComponent,
    RegionsComponent,
    RegionsFormComponent,
    LocationsFormComponent,
    JobsComponent,
    DepartmentsComponent,
    EmployeesComponent,
    JobsFormComponent,
    DepartmentsFormComponent,
    EmployeesFormComponent,
    JobhComponent,
    JobhformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
