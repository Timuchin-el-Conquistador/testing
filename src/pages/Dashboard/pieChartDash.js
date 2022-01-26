import ReactApexChart from "react-apexcharts";
import React, { Component } from "react";

class PieChartDash extends Component {
  state = {
    series: [this.props.Male, this.props.Female, this.props.Other],
    options: {
      chart: {
        type: "pie",
      },
      labels: ["Male", "Female", "Other"],
      colors:['#3F2B89', '#7356C0','#B69EEA'],
      
      stroke: {
        curve: 'smooth',
        width:1,
      },
     
      legend: {
        show: true,
        position: 'right',
        horizontalAlign: 'center', 
        floating: false,
        fontSize: '12px',
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 500,
        formatter: undefined,
        inverseOrder: false,
        tooltipHoverFormatter: undefined,
        customLegendItems: [],
    },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "right",
            },
          },
        },
      ],
    },
  };
  render() {
    return (
      <div id='chart-dash1' className="chart-dash1 chart-general">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          height={160}
          width={240}
        />
     </div>
    );
  }
}

export default PieChartDash;