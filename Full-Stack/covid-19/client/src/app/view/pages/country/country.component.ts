import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Query } from './types';
import { Chart } from 'chart.js';
import gql from 'graphql-tag';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { CountryModel } from 'src/app/core/model/country.model';




@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit, OnDestroy  {


  chart;

  returnUrl : string;

  subscription: Subscription


  topBarServiceInfo: any ;

  constructor(
    private apollo : Apollo,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {

    this.route.paramMap.pipe(
      switchMap((params : ParamMap)=> {
        this.returnUrl = params.get('country')
        return this.initApollo(params.get('country'))
        .pipe(
          map(result => result.data.byCountry)

        )
      })
    ).subscribe((data) => {

      const totalCases = data.map(a => a.cases)
      const totalRecoverd = data.map(a=> a.recovered)
      const totalDeaths = data.map(a=>a.deaths)
      const time = data.map(a=>a.last_update.split("T")[0])

      this.initChart(totalCases, totalRecoverd, totalDeaths , time)

      this.topBarServiceInfo = {
        "total_cases" :totalCases,
        "total_recovered" :totalRecoverd,
        "total_deaths" : totalDeaths
      }


    })

  }


  initApollo(activeUrl): Observable<any> {

    return this.apollo.watchQuery<Query>({
      query: gql`
                query Cases {
                  byCountry(country:"${activeUrl}") {
                    country,
                    last_update,
                    cases
                    deaths
                    recovered
                  }
                }
              `,
          }).valueChanges;

  }

  ngOnDestroy():void {

  }


    initChart(totalCases: any, totalRecoverd: any, totalDeaths: any , time: any) {

      if(this.chart != null) {
        this.chart.destroy();
      }

      this.chart = new Chart("myChart", {

              // The type of chart we want to create
              type: 'bar', // also try bar or other graph types

              // The data for our dataset
              data: {
                labels: time,

                // Information about the dataset
                datasets: [
                {
                  label: "Confimd Cases",
                  backgroundColor: 'rgba(192, 57, 43, 1)',
                  data : totalCases
                },
                {
                  label: "Recoved ",
                  backgroundColor: 'rgba(129, 236, 236, 1)',
                  data : totalRecoverd
                },
                {
                  label: "Deaths ",
                  backgroundColor: 'rgba(44, 62, 80, 1)',
                  data : totalDeaths
                }

                ],
              },

              // Configuration options
              options: {
                layout: {
                  padding: 10,
                },
                tooltips: {
                  enabled: false
                },
                legend: {
                  position: 'bottom',
                },
                title: {
                  display: true,
                  text: 'Total Cases - linear scale'
                },
                scales: {
                  yAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Population',
                    },
                    ticks: {
                      callback: function (value, index, values) {
                        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                    }
                  }
                  }],
                  xAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Month of the Year'
                    },
                  }]
                }
              }
            })

    }

}
