import React from "react";
import { BasicTableStyles } from "../common/BasicTableStyles";
import OrdersTable from "./OrdersTable";
import TradeDetailsTable from "./TradeDetailsTable";
import TradesExpandableTable from "./TradesExpandableTable";
import TradeAnalysis from "./TradeAnalysis";
import { useUpdateTradeMutation } from "../../app/services/trades";

const TradesTable = ({ data, analysisInputs }) => {
  const [updateTrade] = useUpdateTradeMutation();

  const columns = React.useMemo(
    () => [
      {
        // Make an expander cell
        Header: () => null, // No header
        id: "expander", // It needs an ID
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "👇" : "👉"}
          </span>
        ),
      },
      // Trades Section
      {
        Header: "Trades",
        columns: [
          {
            Header: "***",
            columns: [
              {
                Header: "Status",
                accessor: "tradeTypeDisplay",
              },
            ],
          },
          {
            Header: "1st Leg",
            columns: [
              {
                Header: "Sym",
                accessor: "s1",
              },
              {
                Header: "#",
                accessor: "s1Shares",
              },
              {
                Header: "Type",
                accessor: "s1OrderType",
              },
            ],
          },
          {
            Header: "2nd Leg",
            columns: [
              {
                Header: "Sym",
                accessor: "s2",
              },
              {
                Header: "#",
                accessor: "s2Shares",
              },
              {
                Header: "Type",
                accessor: "s2OrderType",
              },
            ],
          },
        ],
      },
      // Pair Trade Open
      {
        Header: "Pair Trade Open",
        columns: [
          {
            Header: "Details",
            columns: [
              {
                Header: "Time",
                accessor: "openDate",
              },
              {
                Header: "S. Dev",
                accessor: "openStdDev",
              },
            ],
          },
          {
            Header: "S1 Price",
            columns: [
              {
                Header: "Homer",
                accessor: "openS1Price",
              },
              {
                Header: "Alpaca",
                accessor: "openS1BrokeragePrice",
              },
            ],
          },
          {
            Header: "S2 Price",
            columns: [
              {
                Header: "Homer",
                accessor: "openS2Price",
              },
              {
                Header: "Alpaca",
                accessor: "openS2BrokeragePrice",
              },
            ],
          },
        ],
      },
      // Pair Trade Close
      {
        Header: "Pair Trade Close",
        columns: [
          {
            Header: "Details",
            columns: [
              {
                Header: "Time",
                accessor: "closeDate",
              },
              {
                Header: "S. Dev",
                accessor: "closeStdDev",
              },
            ],
          },
          {
            Header: "S1 Price",
            columns: [
              {
                Header: "Homer",
                accessor: "closeS1Price",
              },
              {
                Header: "Alpaca",
                accessor: "closeS1BrokeragePrice",
              },
            ],
          },
          {
            Header: "S2 Price",
            columns: [
              {
                Header: "Homer",
                accessor: "closeS2Price",
              },
              {
                Header: "Alpaca",
                accessor: "closeS2BrokeragePrice",
              },
            ],
          },
        ],
      },
      // Profit/Loss Section
      {
        Header: "Profit/Loss",
        columns: [
          {
            Header: "Homer",
            columns: [
              {
                Header: "S1 Leg",
                accessor: "profitLossT1",
              },
              {
                Header: "S2 Leg",
                accessor: "profitLossT2",
              },
              {
                Header: "Total",
                accessor: "profitLoss",
              },
              {
                Header: "Slippage",
                accessor: "profitLossSlippage",
              },
            ],
          },
          {
            Header: "Alpaca",
            columns: [
              {
                Header: "S1 Leg",
                accessor: "brokerageProfitLossT1",
              },
              {
                Header: "S2 Leg",
                accessor: "brokerageProfitLossT2",
              },
              {
                Header: "Total",
                accessor: "profitLossBrokerage",
              },
            ],
          },
        ],
      },
      {
        // Make an close button cell
        Header: () => null, // No header
        id: "closeBtn", // It needs an ID
        Cell: ({ row }) => {
          if (row.original.tradeType === 2 || row.original.tradeType === 3) {
            return (
              <button
                onClick={() => {
                  if (
                    // eslint-disable-next-line no-restricted-globals
                    confirm("Do you want to really close this trade?")
                  ) {
                    const data = row.original;
                    updateTrade({
                      tradeId: data.id,
                      tradeType: 8, //PENDING_CLOSE
                    });
                  }
                }}
              >
                Close
              </button>
            );
          } else {
            return <div>NO OP</div>;
          }
        },
      },
    ],
    [updateTrade]
  );

  const renderRowSubComponent = React.useCallback(
    ({ row }) => (
      <pre
        style={{
          fontSize: "11px",
        }}
      >
        <TradeDetailsTable
          data={[
            {
              spreadAverage: row.original.spreadAverage,
              spreadStdDev: row.original.spreadStdDev,
              openSpread: row.original.openSpread,
              closeSpread: row.original.closeSpread,
            },
          ]}
        />
        <OrdersTable data={row.original.orders} />
        <TradeAnalysis
          analysisInputs={analysisInputs}
          s1={row.original.s1}
          s2={row.original.s2}
          tradeId={row.original.id}
        />
      </pre>
    ),
    [analysisInputs]
  );

  if (data === null) {
    return <div>No results found for specified filter range...</div>;
  }

  return (
    <BasicTableStyles>
      <TradesExpandableTable
        columns={columns}
        data={data}
        // We added this as a prop for our table component
        // Remember, this is not part of the React Table API,
        // it's merely a rendering option we created for
        // ourselves
        renderRowSubComponent={renderRowSubComponent}
      />
    </BasicTableStyles>
  );
};

export default TradesTable;
