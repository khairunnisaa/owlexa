import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OwlexaComponent} from './owlexa/owlexa.component';
import { LintasartaComponent } from './lintasarta/lintasarta.component';
import { StrukturOrganisasiComponent} from './struktur-organisasi/struktur-organisasi.component';
import {FaqComponent} from './faq/faq.component';
import {PendaftaranProviderBaruComponent} from './pendaftaran-provider-baru/pendaftaran-provider-baru.component';
import {PromoComponent} from './promo/promo.component';
import {KontakComponent} from './kontak/kontak.component';
import {KarirComponent} from './karir/karir.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'owlexa/owlexa', component: OwlexaComponent },
  { path: 'owlexa/lintasarta', component: LintasartaComponent },
  { path: 'owlexa/struktur-organisasi', component: StrukturOrganisasiComponent },
  { path: 'owlexa/faq', component: FaqComponent},
  { path: 'owlexa/provider-baru', component: PendaftaranProviderBaruComponent},
  { path: 'owlexa/promo', component: PromoComponent},
  { path: 'owlexa/kontak', component: KontakComponent},
  { path: 'owlexa/karir', component: KarirComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
