import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { RouterLink } from '@angular/router';
import { BreadcrumbAreaComponent } from "../breadcrumb-area/breadcrumb-area.component";

@Component({
  selector: 'app-fret-routier',
  standalone: true,
  imports: [FooterComponent, RouterLink, BreadcrumbAreaComponent],
  templateUrl: './fret-routier.component.html',
  styleUrl: './fret-routier.component.css'
})
export class FretRoutierComponent {

}
