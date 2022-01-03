import ReactApexChart from "react-apexcharts";
import React, { Component } from "react";


class PieChart extends Component {
  state = {
    series: [this.props.Android, this.props.IOS],
    options: {
      chart: {
   
        type: "pie",
      },
      labels: ["Android", "IOS"],
      colors:['#3F2B89', '#7356C0'],
     /* responsive: [{
        breakpoint: 480,
        options: {
          chart: {
           
           
          },
          legend: {
            position: 'bottom'
          }
        }
      }]*/
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

export default PieChart;