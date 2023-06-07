import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceptationComponent } from './components/acceptation/acceptation.component';
import { AdminComponent } from './components/admin/admin.component';
import { AffichageListeaccompanantComponent } from './components/affichage-listeaccompanant/affichage-listeaccompanant.component';
import { AllAccompagnantsComponent } from './components/all-accompagnants/all-accompagnants.component';
import { AllPublicationComponent } from './components/all-publication/all-publication.component';
import { ChartComponent } from './components/chart/chart.component';
import { ClientEnvoyerComponent } from './components/client-envoyer/client-envoyer.component';
import { ConsulterPublicationComponent } from './components/consulter-publication/consulter-publication.component';
import { ContacterComponent } from './components/contacter/contacter.component';
import { CordMaintenanceComponent } from './components/cord-maintenance/cord-maintenance.component';
import { CordoWomenForComponent } from './components/cordo-women-for/cordo-women-for.component';
import { CordoWomenOneComponent } from './components/cordo-women-one/cordo-women-one.component';
import { CordoWomenThreeComponent } from './components/cordo-women-three/cordo-women-three.component';
import { CordoWomenTwoComponent } from './components/cordo-women-two/cordo-women-two.component';
import { CordonneInferfemmeComponent } from './components/cordonne-inferfemme/cordonne-inferfemme.component';
import { CordonneeAidsoignantComponent } from './components/cordonnee-aidsoignant/cordonnee-aidsoignant.component';
import { CordonneeInfhommeComponent } from './components/cordonnee-infhomme/cordonnee-infhomme.component';
import { EspaceClientComponent } from './components/espace-client/espace-client.component';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { ListeReservationsComponent } from './components/liste-reservations/liste-reservations.component';
import { LoginComponent } from './components/login/login.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ModifierAccompagnantComponent } from './components/modifier-accompagnant/modifier-accompagnant.component';
import { ModifierAllCompagnantsComponent } from './components/modifier-all-compagnants/modifier-all-compagnants.component';
import { ModifierUtilisateurComponent } from './components/modifier-utilisateur/modifier-utilisateur.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { SanteInformationComponent } from './components/sante-information/sante-information.component';
import { SearchComponent } from './components/search/search.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';
import { SignupComponent } from './components/signup/signup.component';
import { SuccessPublicaitonsComponent } from './components/success-publicaitons/success-publicaitons.component';
import { ValidatioUserComponent } from './components/validatio-user/validatio-user.component';
import { ValidationLoginComponent } from './components/validation-login/validation-login.component';
import { ValidationSignupComponent } from './components/validation-signup/validation-signup.component';
import { VoirResponseComponent } from './components/voir-response/voir-response.component';
import { WomenInformationComponent } from './components/women-information/women-information.component';


const routes: Routes = [
  //http://localhost:4200/
  { path: "", component: HomeComponent },
  //http://localhost:4200/connexion ==> Afiicher signup component
  { path: "signupAccompagnent", component: SignupComponent },
  //http://localhost:4200/connexion ==> Afiicher sognup admin component
  { path: "signupAdmin", component: SignupAdminComponent },
  //http://localhost:4200/connexion ==> Afiicher signup Client component
  { path: "signupClient", component: SignupClientComponent },
  //http://localhost:4200/connexion ==> Afiicher login component
  { path: "login", component: LoginComponent },
  //http://localhost:4200/contacter ==> Afiicher contacter component
  { path: "contacter", component: ContacterComponent },
  //http://localhost:4200/contacter ==> Afiicher contacter component
  { path: "admin", component: AdminComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "client-envoyer", component: ClientEnvoyerComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "espace-Client", component: EspaceClientComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "information", component: InformationComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "sante-information", component: SanteInformationComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "cordonne-infiohomme", component: CordonneeInfhommeComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "cordonne-infifemme", component: CordonneInferfemmeComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "cordonne-aidesoignant", component: CordonneeAidsoignantComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "allPublications", component: AllPublicationComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "successPublication", component: SuccessPublicaitonsComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "acceptation", component: AcceptationComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "voirResponse", component: VoirResponseComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "search", component: SearchComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "reservation", component: ReservationComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "modifierAccompagnat/:id", component: ModifierAccompagnantComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "womenInformation", component: WomenInformationComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "cordWomenOne", component: CordoWomenOneComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "cordWomenTwo", component: CordoWomenTwoComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "cordWomenThree", component: CordoWomenThreeComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "cordWomenFor", component: CordoWomenForComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "maintenance", component: MaintenanceComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "cordMaintenance", component: CordMaintenanceComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "chart", component: ChartComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "displayAll", component: AllAccompagnantsComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "modifierAllAll/:id", component: ModifierAllCompagnantsComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "consulterPublications", component: ConsulterPublicationComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "allPublications", component: AllPublicationComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "affichageListeAccompagnants", component: AffichageListeaccompanantComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "listeReservations", component: ListeReservationsComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "charts", component: ChartComponent },
  //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
  { path: "validationSignup", component:ValidationSignupComponent },
   //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
   { path: "validationLogin", component:ValidationLoginComponent },
   //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
   { path: "validationUser", component:ValidatioUserComponent },
   //http://localhost:4200/envoyer client ==> Afiicher envoyer client component
   { path: "modifierUser/:id", component:ModifierUtilisateurComponent },





















];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
