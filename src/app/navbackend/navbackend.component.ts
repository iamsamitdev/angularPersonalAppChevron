import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbackend',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbackend.component.html',
  styleUrl: './navbackend.component.css'
})
export class NavbackendComponent {

}
