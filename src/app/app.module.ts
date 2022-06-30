import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { LoginComponent } from './components/fasteducation/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatListModule} from '@angular/material/list';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import{ MatRadioModule} from "@angular/material/radio";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { LayoutModule } from '@angular/cdk/layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import { AppRoutingModule } from './app-routing.module';
import { ChangepaswordComponent } from './components/fasteducation/changepasword/changepasword.component';
import { SuccesfullmessageComponent } from './components/fasteducation/succesfullmessage/succesfullmessage.component';
import { RegisterComponent } from './components/fasteducation/register/register.component';
import { NavBarloginComponent } from './components/fasteducation/nav-barlogin/nav-barlogin.component';
import { PrincipalComponent } from './components/fasteducation/principal/principal.component';
import { NavBarprincipalComponent } from './components/fasteducation/nav-barprincipal/nav-barprincipal.component';
import { CursosComponent } from './components/fasteducation/cursos/cursos.component';
import {SearchComponent} from "./components/fasteducation/Search/search.component";
import {TemasComponent} from "./components/fasteducation/temas/temas.component";
import {VideoComponent} from "./components/fasteducation/video/video.component";
import {RamasComponent} from "./components/fasteducation/Ramas/ramas.component";
import { RouterTestingModule } from "@angular/router/testing";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChangepaswordComponent,
    SuccesfullmessageComponent,
    RegisterComponent,
    NavBarloginComponent,
    PrincipalComponent,
    NavBarprincipalComponent,
    CursosComponent,
    SearchComponent,
    TemasComponent,
    VideoComponent,
    RamasComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        HttpClientModule,
        MatDatepickerModule,
        MatListModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSelectModule,
        LayoutModule,
        AppRoutingModule,
        MatGridListModule,
        YouTubePlayerModule,
        MatCardModule,
        RouterTestingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
