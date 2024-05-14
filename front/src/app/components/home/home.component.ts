import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { CardLivroComponent } from '../card-livro/card-livro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SideBarComponent, CardLivroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
