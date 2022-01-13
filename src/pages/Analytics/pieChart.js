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
      colors:['#7356C0', '#3F2B89'],
      stroke: {
        curve: 'smooth',
        width:1,
      }
    },
  };
  render() {
    return (
      <div id='chart'>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width='100%'
          height={170}
        />
     </div>
    );
  }
}

export default PieChart;