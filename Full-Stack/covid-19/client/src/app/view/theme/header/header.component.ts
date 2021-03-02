import { Component, OnInit } from '@angular/core';
import { ToggleOptions } from 'src/app/core/directives/toggle.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  asideDisplay : boolean;

  toggleOptions: ToggleOptions = {
    target: 'body',
    targetState: 'app-aside',
    togglerState: 'app-aside app-aside-visible'
  };

  constructor() { }

  ngOnInit(): void {
  }


}
