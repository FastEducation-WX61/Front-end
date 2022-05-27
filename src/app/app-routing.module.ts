import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/fasteducation/login/login.component'
import { ChangepaswordComponent } from './components/fasteducation/changepasword/changepasword.component'
import { RegisterComponent } from './components/fasteducation/register/register.component'
import { SuccesfullmessageComponent } from './components/fasteducation/succesfullmessage/succesfullmessage.component'
import { PrincipalComponent } from  './components/fasteducation/principal/principal.component'
import { CursosComponent } from './components/fasteducation/cursos/cursos.component'
import {TemasComponent} from "./components/fasteducation/temas/temas.component";
import {VideoComponent} from "./components/fasteducation/video/video.component";
import {RamasComponent} from "./components/fasteducation/Ramas/ramas.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  { path: 'changepassword',component:ChangepaswordComponent},
  { path: 'register',component:RegisterComponent},
  { path: 'succesfullmessage',component:SuccesfullmessageComponent},
  { path: 'principal', component: PrincipalComponent},
  { path: 'cursos', component: CursosComponent},
  {path: 'temas', component: TemasComponent},
  {path: 'video', component: VideoComponent},
  {path: 'ramas', component: RamasComponent},
  {path: 'cursos/:id', component:CursosComponent},
  {path: 'ramas/:id', component:RamasComponent},
  {path: 'temas/:id', component:TemasComponent},
  {path: 'videos/:id', component:VideoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
