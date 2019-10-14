import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { AuthorComponent } from './guidelines/author/author.component';
import { EditorComponent } from './guidelines/editor/editor.component';
// import { GuideStyleComponent } from './guidelines/guide-style/guide-style.component';
import { PrivacyPolocyComponent } from './guidelines/privacy-polocy/privacy-polocy.component';
import { ReviwerComponent } from './guidelines/reviwer/reviwer.component';
import { JournalsComponent } from './journals/journals.component';
import { EnginComponent } from './journals/engin/engin.component'
// import { JourStyleComponent } from './journals/jour-style/jour-style.component'
import { MedicineComponent } from './journals/medicine/medicine.component'
import { NatHisComponent } from './journals/nat-his/nat-his.component'
import { PoetryComponent } from './journals/poetry/poetry.component'
import { from } from 'rxjs';


const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full' },
  {path: 'about',component: AboutComponent },
  {path: 'contactUs',component: ContactUsComponent },
  {path: 'guidelines',component: GuidelinesComponent },
  {path: 'author',component: AuthorComponent },
  {path: 'editor',component: EditorComponent },
  {path: 'privacy-polocy',component: PrivacyPolocyComponent },
  {path: 'reviwer',component: ReviwerComponent },
  {path: 'jrn-engineering',component: EnginComponent },
  {path: 'jrn-medicine',component: MedicineComponent },
  {path: 'jrn-naturalHistory',component: NatHisComponent },
  {path: 'jrn-poetry',component: PoetryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
