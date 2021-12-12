import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const getPairsChartData = (data) => {
  const chartData = [];

  data.forEach((element) => {
    const chartItem = []; //Create new item for time.
    chartItem.push(element.msec);
    chartItem.push(element.actualStdDev);
    chartData.push(chartItem);
  });

  return chartData;
};

const PairsAnalysisChart = ({ ticker1, ticker2, spreadMean, stdDev, data }) => {
  const options = {
    rangeSelector: {
      buttons: [
        {
          type: "hour",
          count: 1,
          text: "1h",
        },
        {
          type: "day",
          count: 1,
          text: "1D",
        },
        {
          type: "all",
          count: 1,
          text: "All",
        },
      ],
      selected: 1,
      inputEnabled: true,
    },

    chart: {
      height: 500,
    },

    tooltip: {
      formatter() {
        let s = ``;
        this.points.forEach((point) => {
          const d = data.find((i) => i.msec === point.x);
          if (d !== undefined) {
            s += `${ticker1} Close: ${d.closeT1}<br/>`;
            s += `${ticker2} Close: ${d.closeT2}<br/>`;
            s += `Std. Dev: ${d.actualStdDev}<br/>`;
            s += `Spread: ${d.delta}<br/>`;
            s += `Time: ${d.time}</br/>`;
          }
        });

        return s;
      },
    },

    title: {
      text: `Pairs Analysis (${ticker1} - ${ticker2})`,
    },

    subtitle: {
      text: `Spread Mean: ${spreadMean}   Spread Std. Dev: ${stdDev}`,
    },

    yAxis: {
      title: {
        text: "Spread Range",
      },
      plotLines: [
        {
          value: 0,
          color: "black",
          dashStyle: "solid",
          width: 2,
          label: {
            text: "Spread Mean",
          },
        },
        {
          value: 1,
          color: "lightblue",
          dashStyle: "shortdash",
          width: 2,
          label: {
            text: "First Std. Dev.",
          },
        },
        {
          value: -1,
          color: "lightblue",
          dashStyle: "shortdash",
          width: 2,
          label: {
            text: "First Std. Dev.",
          },
        },
        {
          value: 1.5,
          color: "green",
          dashStyle: "shortdash",
          width: 2,
          label: {
            text: "1.5 Std. Dev.",
          },
        },
        {
          value: -1.5,
          color: "green",
          dashStyle: "shortdash",
          width: 2,
          label: {
            text: "1.5 Std. Dev.",
          },
        },
        {
          value: 2,
          color: "yellow",
          dashStyle: "shortdash",
          width: 2,
          label: {
            text: "Second Std. Dev.",
          },
        },
        {
          value: -2,
          color: "yellow",
          dashStyle: "shortdash",
          width: 2,
          label: {
            text: "Second Std. Dev.",
          },
        },
        {
          value: 2.5,
          color: "orange",
          dashStyle: "shortdash",
          width: 2,
          label: {
            text: "2.5 Std. Dev.",
          },
        },
        {
          value: -2.5,
          color: "orange",
          dashStyle: "shortdash",
          width: 2,
          label: {
            text: "2.5 Std. Dev.",
          },
        },
        {
          value: 3,
          color: "red",
          dashStyle: "shortdash",
          width: 2,
          label: {
            text: "3 Std. Dev.",
          },
        },
        {
          value: -3,
          color: "red",
          dashStyle: "shortdash",
          width: 2,
          label: {
            text: "3 Std. Dev.",
          },
        },
      ],
    },

    series: [
      {
        name: "Spread",
        data: getPairsChartData(data),
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
};

export default PairsAnalysisChart;
