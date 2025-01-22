import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceLivraisonComponent } from './components/services/service-livraison/service-livraison.component';
import { ServiceDemenagementComponent } from './components/services/service-demenagement/service-demenagement.component';
import { FretRoutierComponent } from './components/services/fret-routier/fret-routier.component';
import { StockageModerneComponent } from './components/services/stockage-moderne/stockage-moderne.component';
import { FretAerienComponent } from './components/services/fret-aerien/fret-aerien.component';
import { FretMaritimeComponent } from './components/services/fret-maritime/fret-maritime.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'contact-us', component: ContactComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services/service-de-livraison', component: ServiceLivraisonComponent},
    {path: 'services/demenagement', component: ServiceDemenagementComponent},
    {path: 'services/fret-routier', component: FretRoutierComponent},
    {path: 'services/stockage-moderne', component: StockageModerneComponent},
    {path: 'services/fret-aerien', component: FretAerienComponent},
    {path: 'services/fret-maritime', component: FretMaritimeComponent}
];
