import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { AnalogComponent } from "../galleries/analog/analog.component";
import { DigitalComponent } from "../galleries/digital/digital.component";

const routes: Routes = [
   {
     path: '',
     component: HomeComponent
   },
  {
    path: 'about',
    component: AboutComponent
  },
   {
     path: 'contact',
     component: ContactComponent
   },
   {
     path: 'analog',
     component: AnalogComponent
   },
   {
     path: 'digital',
     component: DigitalComponent
   },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

