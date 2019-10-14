import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { GuideStyleComponent } from './guidelines/guide-style/guide-style.component';
import { JournalsComponent } from './journals/journals.component';
import { JourStyleComponent } from './journals/jour-style/jour-style.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthorComponent } from './guidelines/author/author.component';
import { EditorComponent } from './guidelines/editor/editor.component';
import { ReviwerComponent } from './guidelines/reviwer/reviwer.component';
import { PrivacyPolocyComponent } from './guidelines/privacy-polocy/privacy-polocy.component';
import { EnginComponent } from './journals/engin/engin.component';
import { PoetryComponent } from './journals/poetry/poetry.component';
import { MedicineComponent } from './journals/medicine/medicine.component';
import { NatHisComponent } from './journals/nat-his/nat-his.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    GuidelinesComponent,
    GuideStyleComponent,
    JournalsComponent,
    JourStyleComponent,
    ContactUsComponent,
    AuthorComponent,
    EditorComponent,
    ReviwerComponent,
    PrivacyPolocyComponent,
    EnginComponent,
    PoetryComponent,
    MedicineComponent,
    NatHisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
