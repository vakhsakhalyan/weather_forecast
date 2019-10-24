import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';
  darkModeActived: boolean;
  showMenu: boolean;

  themeChange(evt) {
    this.darkModeActived = evt.target.checked;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
