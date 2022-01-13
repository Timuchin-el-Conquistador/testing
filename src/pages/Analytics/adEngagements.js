import ReactApexChart from "react-apexcharts";
import React, { Component } from "react";


class AdEngagements extends Component {
  state = {
    series: [
      this.props.engagements_campaign1,
      this.props.engagements_campaign2,
    ],
    options: {
      chart: {
        type: "pie",
        width: "400"
      },
      colors:['#3F2B89', '#7356C0'],
      labels: [this.props.campaign1, this.props.campaign2],
      stroke: {
        curve: 'smooth',
        width:1,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
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
      <div id="chart4" className="chart4">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          height={160}
        />
      </div>
    );
  }
}

export default AdEngagements;
