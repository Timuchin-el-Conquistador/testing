import ReactApexChart from "react-apexcharts";
import React, { Component } from "react";

class AgeOfReachedDemographics extends Component {
  state = {
    series: [
      this.props.a,
      this.props.b,
      this.props.c,
      this.props.d,
      this.props.e,
    ],
    options: {
      chart: {
     
        type: "pie",
      },
      colors: ['#B69EEA', '#3F2B89','#997FD8','#573EA4','#7356C0'],
      labels: ["18-25", "26-35", "36-45", "46-55", "56-65"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: '100%',
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  render() {
    return (
      <div id='chart'>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width='180%'
          height={170}
       
          
        />
     </div>
    );
  }
}

export default AgeOfReachedDemographics;