import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { RouterLink } from '@angular/router';
import { BreadcrumbAreaComponent } from "../breadcrumb-area/breadcrumb-area.component";

@Component({
  selector: 'app-stockage-moderne',
  standalone: true,
  imports: [FooterComponent, RouterLink, BreadcrumbAreaComponent],
  templateUrl: './stockage-moderne.component.html',
  styleUrl: './stockage-moderne.component.css'
})
export class StockageModerneComponent {

}
