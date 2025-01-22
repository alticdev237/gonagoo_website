import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { RouterLink } from '@angular/router';
import { BreadcrumbAreaComponent } from "../breadcrumb-area/breadcrumb-area.component";

@Component({
  selector: 'app-service-demenagement',
  standalone: true,
  imports: [FooterComponent, RouterLink, BreadcrumbAreaComponent],
  templateUrl: './service-demenagement.component.html',
  styleUrl: './service-demenagement.component.css'
})
export class ServiceDemenagementComponent {

}
