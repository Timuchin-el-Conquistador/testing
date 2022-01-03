import ReactApexChart from "react-apexcharts";
import React, { Component } from "react";

class AudienceDemographicsPieChart extends Component {
  state = {
    series: [this.props.Male, this.props.Female],
    options: {
      chart: {
        type: "pie",
      },
      labels: ["Male", "Female"],
      colors: ["#3F2B89", "#7356C0"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
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
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width="180%"
          height={170}
        />
      </div>
    );
  }
}

export default AudienceDemographicsPieChart;
