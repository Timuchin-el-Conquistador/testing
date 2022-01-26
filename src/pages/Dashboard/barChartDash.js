import ReactApexChart from "react-apexcharts";
import React, { Component } from "react";
// import './pies.css'

class BarChartDash extends Component {
  state = {
    series: [
      {
        name: "reach",
        data: [55, 30, 15, 15, 15],
      },
    ],
    options: {
        dataLabels: {
            enabled: true
          },
          legend: {
            show:true,
            position: 'right',
            showForSingleSeries: true,
            customLegendItems: ['0-18', '18-25','25-35', '35-45', '45-65'],
            borderRadius:12,
            markers: {
              fillColors: ['#3F2B89', '#573EA4', '#7356C0', '#997FD8', '#B69EEA']
            }
          },
        
      chart: {
        type: "bar",
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
        foreColor: 'blue'
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          borderRadius: 2,
          horizontal: false,
        },
      },
      xaxis: {
        labels: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      fill: {
        opacity:1,
        colors: ['#3F2B89', '#573EA4', '#7356C0', '#997FD8', '#B69EEA']
      },
      
    },
  };
  render() {
    return (
      <div id="chart-dash2" className="chart-dash2">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width='280'
          height= {132}
        />
      </div>
    );
  }
}

export default BarChartDash;