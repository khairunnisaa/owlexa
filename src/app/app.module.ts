import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterpageComponent } from './footerpage/footerpage.component';
import { HomebodyComponent } from './homebody/homebody.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SelectionUpMenuComponent } from './selection-up-menu/selection-up-menu.component';
import { NavbarInformationComponent } from './navbar-information/navbar-information.component';
import { SliderImageComponent } from './slider-image/slider-image.component';
import { LogoAndInformationComponent } from './logo-and-information/logo-and-information.component';
import { MapComponent } from './map/map.component';
import { LintasartaComponent } from './lintasarta/lintasarta.component';
import { AboutOwlexaComponent } from './about-owlexa/about-owlexa.component';
import { OwlexaComponent } from './owlexa/owlexa.component';
import { StrukturOrganisasiComponent } from './struktur-organisasi/struktur-organisasi.component';
import { FaqComponent } from './faq/faq.component';
import { PendaftaranProviderBaruComponent } from './pendaftaran-provider-baru/pendaftaran-provider-baru.component';
import { PromoComponent } from './promo/promo.component';
import { KontakComponent } from './kontak/kontak.component';
import { KarirComponent } from './karir/karir.component';
import { KonsultasiDokterComponent } from './konsultasi-dokter/konsultasi-dokter.component';
import { KlienBerhargaComponent } from './klien-berharga/klien-berharga.component';
import { ArtikelComponent } from './artikel/artikel.component';
import { ArtikelDetailComponent } from './artikel-detail/artikel-detail.component';
import { PressReleaseComponent } from './press-release/press-release.component';

declare var $: any;
console.log(`jQuery version: ${$.fn.jquery}`);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterpageComponent,
    HomebodyComponent,
    LatestNewsComponent,
    NavbarComponent,
    SelectionUpMenuComponent,
    NavbarInformationComponent,
    SliderImageComponent,
    LogoAndInformationComponent,
    MapComponent,
    LintasartaComponent,
    AboutOwlexaComponent,
    OwlexaComponent,
    StrukturOrganisasiComponent,
    FaqComponent,
    PendaftaranProviderBaruComponent,
    PromoComponent,
    KontakComponent,
    KarirComponent,
    KonsultasiDokterComponent,
    KlienBerhargaComponent,
    ArtikelComponent,
    ArtikelDetailComponent,
    PressReleaseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
