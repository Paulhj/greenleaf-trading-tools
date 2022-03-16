import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const getPairsChartData = (data) => {
  const chartData = [];

  data.forEach((element) => {
    const chartItem = []; //Create new item for time.
    chartItem.push(element.time);
    chartItem.push(element.profitLoss);
    chartData.push(chartItem);
  });

  return chartData;
};

const TradesSummaryChart = ({ data }) => {
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
          const d = data.find((i) => i.time === point.key);
          if (d !== undefined) {
            s += `Profit/Loss: ${d.profitLoss}<br/>`;
            s += `Time: ${d.time}</br/>`;
          }
        });

        return s;
      },
    },

    title: {
      text: `Trades Summary Profit/Loss Chart`,
    },

    yAxis: {
      title: {
        text: "Profit/Loss",
      },
    },

    series: [
      {
        name: "Profit/Loss",
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

export default TradesSummaryChart;
