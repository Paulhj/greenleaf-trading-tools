import React from "react";
import { BasicTableStyles } from "../common/BasicTableStyles";
import OrdersTable from "./OrdersTable";
import TradeDetailsTable from "./TradeDetailsTable";
import TradesExpandableTable from "./TradesExpandableTable";

const TradesTable = ({ data }) => {
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
            Header: "Type",
            accessor: "tradeTypeDisplay",
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
    ],
    []
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
      </pre>
    ),
    []
  );

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
