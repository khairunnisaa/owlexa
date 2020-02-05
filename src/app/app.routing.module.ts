import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OwlexaComponent} from './owlexa/owlexa.component';
import { LintasartaComponent } from './lintasarta/lintasarta.component';
import { StrukturOrganisasiComponent} from './struktur-organisasi/struktur-organisasi.component';
import {FaqComponent} from './faq/faq.component';
import {PendaftaranProviderBaruComponent} from './pendaftaran-provider-baru/pendaftaran-provider-baru.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'owlexa', component: OwlexaComponent },
  { path: 'lintasarta', component: LintasartaComponent },
  { path: 'struktur-organisasi', component: StrukturOrganisasiComponent },
  { path: 'faq', component: FaqComponent},
  { path: 'provider-baru', component: PendaftaranProviderBaruComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
