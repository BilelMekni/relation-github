import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { OurBestComponent } from './components/our-best/our-best.component';
import { PageComponent } from './components/page/page.component';
import { SliderComponent } from './components/slider/slider.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { PublicitePrincipaleComponent } from './components/publicite-principale/publicite-principale.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContacterComponent } from './components/contacter/contacter.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { AdminComponent } from './components/admin/admin.component';
import { ClientTableComponent } from './components/client-table/client-table.component';
import { AccompagnantTableComponent } from './components/accompagnant-table/accompagnant-table.component';
import { ClientEnvoyerComponent } from './components/client-envoyer/client-envoyer.component';
import { EspaceClientComponent } from './components/espace-client/espace-client.component';
import { HttpClientModule } from "@angular/common/http";
import { SignupClientComponent } from './components/signup-client/signup-client.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeAccompagnantComponent } from './components/liste-accompagnant/liste-accompagnant.component';
import { InformationComponent } from './components/information/information.component';
import { SanteInformationComponent } from './components/sante-information/sante-information.component';
import { CordonneeInfhommeComponent } from './components/cordonnee-infhomme/cordonnee-infhomme.component';
import { CordonneeAidsoignantComponent } from './components/cordonnee-aidsoignant/cordonnee-aidsoignant.component';
import { CordonneInferfemmeComponent } from './components/cordonne-inferfemme/cordonne-inferfemme.component';
import { AcceptationComponent } from './components/acceptation/acceptation.component';
import { AllPublicationComponent } from './components/all-publication/all-publication.component';
import { SuccessPublicaitonsComponent } from './components/success-publicaitons/success-publicaitons.component';
import { VoirResponseComponent } from './components/voir-response/voir-response.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { SearchComponent } from './components/search/search.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ModifierAccompagnantComponent } from './components/modifier-accompagnant/modifier-accompagnant.component';
import { WomenInformationComponent } from './components/women-information/women-information.component';
import { CordoWomenOneComponent } from './components/cordo-women-one/cordo-women-one.component';
import { CordoWomenTwoComponent } from './components/cordo-women-two/cordo-women-two.component';
import { CordoWomenThreeComponent } from './components/cordo-women-three/cordo-women-three.component';
import { CordoWomenForComponent } from './components/cordo-women-for/cordo-women-for.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { CordMaintenanceComponent } from './components/cord-maintenance/cord-maintenance.component';
import { ChartComponent } from './components/chart/chart.component';
import { AllAccompagnantsComponent } from './components/all-accompagnants/all-accompagnants.component';
import { ModifierAllCompagnantsComponent } from './components/modifier-all-compagnants/modifier-all-compagnants.component';
import { CvPipe } from './pipes/cv.pipe';
import { ConsulterPublicationComponent } from './components/consulter-publication/consulter-publication.component';
import { AffichageListeaccompanantComponent } from './components/affichage-listeaccompanant/affichage-listeaccompanant.component';
import { ListeReservationsComponent } from './components/liste-reservations/liste-reservations.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { ValidationSignupComponent } from './components/validation-signup/validation-signup.component';
import { ValidationLoginComponent } from './components/validation-login/validation-login.component';
import { ValidatioUserComponent } from './components/validatio-user/validatio-user.component';
import { ModifierUtilisateurComponent } from './components/modifier-utilisateur/modifier-utilisateur.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    BlogComponent,
    PortfolioComponent,
    OurBestComponent,
    PageComponent,
    SliderComponent,
    TopBarComponent,
    PublicitePrincipaleComponent,
    InfoComponent,
    ArticleComponent,
    BannerComponent,
    ContacterComponent,
    AsterixPipe,
    GenderPipe,
    MyFilterPipe,
    AdminComponent,
    ClientTableComponent,
    AccompagnantTableComponent,
    ClientEnvoyerComponent,
    EspaceClientComponent,
    SignupClientComponent,
    SignupAdminComponent,
    ListeAccompagnantComponent,
    InformationComponent,
    SanteInformationComponent,
    CordonneeInfhommeComponent,
    CordonneeAidsoignantComponent,
    CordonneInferfemmeComponent,
    AcceptationComponent,
    AllPublicationComponent,
    SuccessPublicaitonsComponent,
    VoirResponseComponent,
    ReversePipe,
    SearchComponent,
    ReservationComponent,
    ModifierAccompagnantComponent,
    WomenInformationComponent,
    CordoWomenOneComponent,
    CordoWomenTwoComponent,
    CordoWomenThreeComponent,
    CordoWomenForComponent,
    MaintenanceComponent,
    CordMaintenanceComponent,
    ChartComponent,
    AllAccompagnantsComponent,
    ModifierAllCompagnantsComponent,
    CvPipe,
    ConsulterPublicationComponent,
    AffichageListeaccompanantComponent,
    ListeReservationsComponent,
    AdminTableComponent,
    ValidationSignupComponent,
    ValidationLoginComponent,
    ValidatioUserComponent,
    ModifierUtilisateurComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    // saisir manuellement et aussi pour importation
    FormsModule,
    ReactiveFormsModule,
    JwPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
