import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryFormComponent } from './components/country/country-form/country-form.component';
import { CountryComponent } from './components/country/country.component';
import { DepartmentsFormComponent } from './components/departments/departments-form/departments-form.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EmployeesFormComponent } from './components/employees/employees-form/employees-form.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { IndexComponent } from './components/index/index.component';
import { JobhComponent } from './components/jobh/jobh.component';
import { JobhformComponent } from './components/jobh/jobhform/jobhform.component';
import { JobsFormComponent } from './components/jobs/jobs-form/jobs-form.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LocationsFormComponent } from './components/locations/locations-form/locations-form.component';
import { LocationsComponent } from './components/locations/locations.component';
import { RegionsFormComponent } from './components/regions/regions-form/regions-form.component';
import { RegionsComponent } from './components/regions/regions.component';


const routes: Routes = [
  {path:'countries',component:CountryComponent},
  {path:'regions',component:RegionsComponent},
  {path:'index',component:IndexComponent},
  {path:'countries/form',component:CountryFormComponent},
  {path:'countries/form/:id',component:CountryFormComponent},
  {path:'regions/form',component:RegionsFormComponent},
  {path:'regions/form/:id',component:CountryFormComponent},
  {path:'locations',component:LocationsComponent},
  {path:'locations/form',component:LocationsFormComponent},
  {path:'locations/form/:id',component:LocationsFormComponent},
  {path:'jobs',component:JobsComponent},
  {path:'jobs/form',component:JobsFormComponent},
  {path:'jobs/form/:id',component:JobsFormComponent},
  {path:'departments',component:DepartmentsComponent},
  {path:'departments/form',component:DepartmentsFormComponent},
  {path:'departments/form/:id',component:DepartmentsFormComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'employees/form',component:EmployeesFormComponent},
  {path:'employees/form/:id',component:EmployeesFormComponent},
  {path:'jobHistory',component:JobhComponent},
  {path:'jobHistory/form',component:JobhformComponent},
  {path:'jobHistory/form/:id',component:JobhformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
