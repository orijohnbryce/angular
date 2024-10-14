import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LinksComponent } from '../links/links.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LinksComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
