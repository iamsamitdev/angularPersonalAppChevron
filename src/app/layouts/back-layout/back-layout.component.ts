import { Component } from '@angular/core';
import { NavbackendComponent } from "../../navbackend/navbackend.component";
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../../sidebar/sidebar.component";


@Component({
    selector: 'app-back-layout',
    standalone: true,
    templateUrl: './back-layout.component.html',
    styleUrl: './back-layout.component.css',
    imports: [RouterOutlet, NavbackendComponent, SidebarComponent]
})
export class BackLayoutComponent {

}
