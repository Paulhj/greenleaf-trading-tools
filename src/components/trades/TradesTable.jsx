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
      {
        Header: "Trades",
        columns: [
          {
            Header: "Type",
            accessor: "tradeTypeDisplay",
          },
          {
            Header: "S1",
            accessor: "s1",
          },
          {
            Header: "S2",
            accessor: "s2",
          },
          {
            Header: "Open",
            accessor: "openDate",
          },
          {
            Header: "Close",
            accessor: "closeDate",
          },
          {
            Header: "O. Std Dev",
            accessor: "openStdDev",
          },
          {
            Header: "C. Std Dev",
            accessor: "closeStdDev",
          },
          {
            Header: "O. S1 Price",
            accessor: "openS1Price",
          },
          {
            Header: "C. S1 Price",
            accessor: "closeS1Price",
          },
          {
            Header: "O. S2 Price",
            accessor: "openS2Price",
          },
          {
            Header: "C. S2 Price",
            accessor: "closeS2Price",
          },
          {
            Header: "S1 Shares",
            accessor: "s1Shares",
          },
          {
            Header: "S2 Shares",
            accessor: "s2Shares",
          },
          {
            Header: "S1 Type",
            accessor: "s1OrderType",
          },
          {
            Header: "S2 Type",
            accessor: "s2OrderType",
          },
          {
            Header: "P/L T1",
            accessor: "profitLossT1",
          },
          {
            Header: "P/L T2",
            accessor: "profitLossT2",
          },
          {
            Header: "P/L",
            accessor: "profitLoss",
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
