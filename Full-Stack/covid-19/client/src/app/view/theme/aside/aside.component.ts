import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Apollo } from 'apollo-angular';
import { Country } from './types';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { OffcanvasOptions } from 'src/app/core/directives/offcanvas.directive';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
  // encapsulation: ViewEncapsulation.None
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsideComponent implements OnInit {


  countries : any

  public type: string = 'component';

  public disabled: boolean = false;

  public config: PerfectScrollbarConfigInterface = {};


  canvasOptions: OffcanvasOptions = {
    baseClass: 'app-aside',
    overlay: true,
    closeBy: 'app_aside_close_btn',
    toggleBy: [{
      target: 'app_aside-toggler',
      state: 'app-aside-toggler--active'
    },{
      target: 'app_aside_mobile_toggler',
      state: 'app-header-mobile__toolbar-toggler--active'
    }]
  }


  constructor(
    private apollo : Apollo

  ) {

  }

  ngOnInit(): void {
    this.countries = this.apollo.watchQuery<Country>({
      query: gql`
        query allCoutries {
          countries{
            name
            alpha2
          }
        }
      `
    })
    .valueChanges
    .pipe(
      map(results=> results.data.countries)
    )


  }

}
