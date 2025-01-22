import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { BreadcrumbAreaComponent } from "./breadcrumb-area/breadcrumb-area.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FooterComponent, RouterLink, BreadcrumbAreaComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
