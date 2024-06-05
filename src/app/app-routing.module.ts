import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

const routes:Routes =[
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: ResumeComponent,
    path: 'resume'
  },
  {
    component: ContactComponent,
    path: 'contact'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
