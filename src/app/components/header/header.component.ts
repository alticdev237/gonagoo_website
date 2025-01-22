import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isActive: boolean = false;
  isMenuActive: boolean = false;
  mobileMenuContent: string = '';
  lastScrollTop = 0; // Position du dernier défilement
  menuFixed = false; // Indicateur pour savoir si le menu doit être fixé
  headerHeight = 245; // Hauteur à partir de laquelle le menu devient sticky
  header!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Récupère l'élément du menu sticky
    this.header = this.el.nativeElement.querySelector('#sticky-header');
  }

  ngAfterViewInit(): void {
    this.setupMobileMenu();
  }

  private setupMobileMenu(): void {
    // Vérification si le sous-menu existe
    const menuItemsWithChildren = this.el.nativeElement.querySelectorAll('.tgmenu__wrap li.menu-item-has-children ul');
    if (menuItemsWithChildren.length) {
      const navigationItems = this.el.nativeElement.querySelectorAll('.tgmenu__wrap .navigation li.menu-item-has-children');
      navigationItems.forEach((item: HTMLElement) => {
        const dropdownBtn = this.renderer.createElement('div');
        this.renderer.addClass(dropdownBtn, 'dropdown-btn');
        const span = this.renderer.createElement('span');
        this.renderer.addClass(span, 'plus-line');
        this.renderer.appendChild(dropdownBtn, span);
        this.renderer.appendChild(item, dropdownBtn);
      });
    }

    // Vérification si le menu mobile existe
    const mobileMenu = this.el.nativeElement.querySelector('.tgmobile__menu');
    if (mobileMenu) {
      const menuContent = this.el.nativeElement.querySelector('.tgmenu__wrap .tgmenu__main-menu');
      if (menuContent) {
        this.mobileMenuContent = menuContent.innerHTML;
        const mobileMenuOuter = this.el.nativeElement.querySelector('.tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer');
        if (mobileMenuOuter && this.mobileMenuContent) {
          mobileMenuOuter.innerHTML = this.mobileMenuContent;
        }
      }

      // Événements pour le bouton de dropdown
      const dropdownButtons = this.el.nativeElement.querySelectorAll('.tgmobile__menu li.menu-item-has-children .dropdown-btn');
      dropdownButtons.forEach((button: HTMLElement) => {
        this.renderer.listen(button, 'click', () => {
          button.classList.toggle('open');
          const ul = button.previousElementSibling as HTMLElement;
          if (ul) {
            ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
          }
        });
      });

      // Affichage du menu mobile
      const menuToggler = this.el.nativeElement.querySelector('.mobile-nav-toggler');
      if (menuToggler) {
        this.renderer.listen(menuToggler, 'click', () => {
          document.body.classList.add('mobile-menu-visible');
        });
      }

      // Fermeture du menu mobile
      const closeButtons = this.el.nativeElement.querySelectorAll('.tgmobile__menu-backdrop, .tgmobile__menu .close-btn');
      closeButtons.forEach((button: HTMLElement) => {
        this.renderer.listen(button, 'click', () => {
          document.body.classList.remove('mobile-menu-visible');
        });
      });
    }
  }

  openMenu() {
    this.isActive = true;
  }

  closeMenu() {
    this.isActive = false;
  }

  scrollToTarget(target: string): void { 
    const element = document.querySelector(target);
    if (element) { 
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    // Gérer le comportement sticky du menu
    if (currentScroll >= this.headerHeight) {
      this.renderer.addClass(this.header, 'sticky-menu');
      this.renderer.addClass(this.header, 'active-height');
    } else {
      this.renderer.removeClass(this.header, 'sticky-menu');
      this.renderer.removeClass(this.header, 'active-height');
    }

    // Gérer l'affichage du menu en fonction de la direction du scroll
    if (currentScroll > this.lastScrollTop && currentScroll > this.headerHeight) {
      // Défilement vers le bas
      this.renderer.removeClass(this.header, 'sticky-menu__show');
    } else if (currentScroll < this.lastScrollTop && currentScroll > this.headerHeight) {
      // Défilement vers le haut
      this.renderer.addClass(this.header, 'sticky-menu__show');
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

  }

  // toggleMenu(state: boolean) {
  //   this.isMenuActive = state;
  //   if (this.isMenuActive) {
  //     document.body.classList.add('mobile-menu-visible');
  //   } else {
  //     document.body.classList.remove('mobile-menu-visible');
  //   }
  // }

}
