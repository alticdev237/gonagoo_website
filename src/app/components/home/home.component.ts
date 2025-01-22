import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterHomeComponent } from "../footer-home/footer-home.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FooterHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
