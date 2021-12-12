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

const getSeriesData = (data) => {
  const seriesData = data.map((series) => ({
    name: `${series.ticker1}-${series.ticker2}`,
    data: getPairsChartData(series.minuteCloseData),
    tooltip: {
      pointFormatter: function () {
        return `Series: ${series.ticker1}-${series.ticker2}`;
      },
    },
  }));

  return seriesData;
};

const MultiplePairsAnalysisChart = ({ data }) => {
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
      height: 800,
    },

    /*
    tooltip: {
      formatter() {
        let s = ``;
        this.points.forEach((point) => {
          const isSelected = point.series.selected;
          if (isSelected) {
            console.log("isSelected is true");
          }
          const name = point.series.name;
          const data1 = data.find((n) => name === `${n.ticker1}-${n.ticker2}`);
          const d = data1.minuteCloseData.find(
            (i) => i.msec === point.x && i.doubleDelta === point.y
          );
          if (d !== undefined) {
            s += `${d.ticker1} Close: ${d.closeT1}<br/>`;
            s += `${d.ticker2} Close: ${d.closeT2}<br/>`;
            s += `Std. Dev: ${d.actualStdDev}<br/>`;
            s += `Spread: ${d.delta}<br/>`;
            s += `Time: ${d.time}</br/>`;
          }
        });

        return s;
      },
    },
    */
    title: {
      text: `Pairs Analysis`,
    },

    subtitle: {
      text: `Spread Mean: ${""}   Spread Std. Dev: ${""}`,
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

    series: getSeriesData(data),
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

export default MultiplePairsAnalysisChart;
