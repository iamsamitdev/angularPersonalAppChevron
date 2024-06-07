import { Component } from '@angular/core';
import { NavComponent } from "../../nav/nav.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-front-layout',
    standalone: true,
    templateUrl: './front-layout.component.html',
    styleUrl: './front-layout.component.css',
    imports: [RouterOutlet, NavComponent]
})
export class FrontLayoutComponent {

}
