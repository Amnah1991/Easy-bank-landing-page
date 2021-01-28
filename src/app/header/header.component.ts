import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showMenu() {
    var icon = document.getElementById('navBtn');
    var menu = document.getElementById('menu');
    icon.classList.toggle('--open');
    icon.classList.toggle('--close');

    if (icon.classList.contains('--close')) {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  }
}
