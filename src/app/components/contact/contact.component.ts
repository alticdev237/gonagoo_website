import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, RouterLink, FormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isSubmitting = false;
  formFields: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }

  constructor(private toastrService: ToastrService) {}

submitForm(form: any) {

  if (form.valid) {
    this.isSubmitting = true;

    setTimeout(() => {
      emailjs.send(
        'service_p9od4w9', 
        'template_ndmh9hf', 
        {...this.formFields}, 
        {
          publicKey: 'FEbE84rRatQAEbKne'
        }
      ).then(
        () => {
          // alert('Votre message a bien été envoyé !\nGonagoo vous remercie.');
          this.toastrService.success('Votre message a bien été envoyé !\nGonagoo vous remercie.', 'Succès');
          this.isSubmitting = false;
          form.reset();
        },
        (error) => {
          // alert(`Echec d\'envoie...\n${(error as EmailJSResponseStatus).text}`);
          this.toastrService.error(`Echec d\'envoie...\n${(error as EmailJSResponseStatus).text}`, 'Erreur');
          this.isSubmitting = false;
        }
      );

    }, 2000);
    
  } else {
    this.toastrService.error('Formulaire Invalide !', 'Erreur');
  }
}

}
