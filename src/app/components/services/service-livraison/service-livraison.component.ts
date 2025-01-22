import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { RouterLink } from '@angular/router';
import { BreadcrumbAreaComponent } from "../breadcrumb-area/breadcrumb-area.component";

@Component({
  selector: 'app-service-livraison',
  standalone: true,
  imports: [FooterComponent, RouterLink, BreadcrumbAreaComponent],
  templateUrl: './service-livraison.component.html',
  styleUrl: './service-livraison.component.css'
})
export class ServiceLivraisonComponent {

}
