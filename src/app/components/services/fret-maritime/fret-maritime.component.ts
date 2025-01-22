import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { BreadcrumbAreaComponent } from "../breadcrumb-area/breadcrumb-area.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fret-maritime',
  standalone: true,
  imports: [FooterComponent, BreadcrumbAreaComponent, RouterLink],
  templateUrl: './fret-maritime.component.html',
  styleUrl: './fret-maritime.component.css'
})
export class FretMaritimeComponent {

}
