import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js'
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Query } from './types'
import gql from 'graphql-tag';


@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],

})
export class WorldComponent implements OnInit, OnDestroy {



  chart;

  returnUrl : string;

  topBarServiceInfo: any


  constructor(
    private apollo : Apollo
  ) { }


  ngOnInit(): void {

    this.initApollo()

  }

  ngOnDestroy(): void {

  }

  initApollo() {

    this.apollo.watchQuery<Query>({
      query: gql`
        query allLists {
          lists {
            last_update
            total_cases
            total_deaths
            total_recovered
          }
        }
      `,
    })
      .valueChanges
      .pipe(
        map(result => result.data.lists)
      ).subscribe( data => {

       const totalCases = data.map(a => a.total_cases)
       const totalRecoverd = data.map(a=> a.total_recovered)
       const totalDeaths = data.map(a=>a.total_deaths)
       const time = data.map(a=>a.last_update.split("T")[0])

       this.initChart(totalCases, totalRecoverd, totalDeaths , time)

       this.topBarServiceInfo = {
         "total_cases" :totalCases,
         "total_recovered" :totalRecoverd,
         "total_deaths" : totalDeaths
       }

      })

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




