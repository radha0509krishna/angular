import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialbuttonComponent } from './materialbutton.component';
import {MatButtonModule,MatIconModule,MatCardModule,MatFormFieldModule,MatInputModule,MatProgressSpinnerModule,MatToolbarModule} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AboutComponent } from './about.component';
import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard.component';
import { TutorialComponent } from './tutorial.component';
import { BooksComponent } from './books.component';
import { AuthguardComponent } from './authguard.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {AuthguardService} from "./authguard.service";
import {ConfirmguardService} from "./confirmguard.service";
import {Routes,RouterModule} from "@angular/router";


const routes :Routes =[
  {path:"about",component :AboutComponent},
  {path :"dashboard",component :DashboardComponent},
  {path:"login",component:LoginComponent,canDeactivate:[ConfirmguardService]},
  {path:"tutorial",component:TutorialComponent,canDeactivate:[AuthguardService]},
  {path:"books",component:BooksComponent,canActivate:[AuthguardService]}
]

@NgModule({
  declarations: [
    AppComponent,
    MaterialbuttonComponent,
    AboutComponent,
    LoginComponent,
    DashboardComponent,
    TutorialComponent,
    BooksComponent,
    AuthguardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatButtonModule,MatIconModule,
    MatCardModule,MatTooltipModule,MatFormFieldModule,MatInputModule,
    MatProgressSpinnerModule,MatToolbarModule,RouterModule.forRoot(routes),
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
