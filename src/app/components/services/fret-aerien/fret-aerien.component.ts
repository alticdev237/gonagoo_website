import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { BreadcrumbAreaComponent } from "../breadcrumb-area/breadcrumb-area.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fret-aerien',
  standalone: true,
  imports: [FooterComponent, BreadcrumbAreaComponent, RouterLink],
  templateUrl: './fret-aerien.component.html',
  styleUrl: './fret-aerien.component.css'
})
export class FretAerienComponent {

}
