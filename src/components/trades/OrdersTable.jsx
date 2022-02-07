import React from "react";
import Table from "../common/Table";
import { BasicTableStyles } from "../common/BasicTableStyles";

const OrdersTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Alpaca Orders",
        columns: [
          {
            Header: "Symbol",
            accessor: "symbol",
          },
          {
            Header: "Quantity",
            accessor: "quantity",
          },
          {
            Header: "Order Status",
            accessor: "orderStatusDisplay",
          },
          {
            Header: "Order Side",
            accessor: "orderSideDisplay",
          },
          {
            Header: "Order Type",
            accessor: "orderTypeDisplay",
          },
          {
            Header: "Avg. Fill Price",
            accessor: "averageFillPrice",
          },
          {
            Header: "Fill Date",
            accessor: "filledAtLocal",
          },
        ],
      },
    ],
    []
  );

  return (
    <BasicTableStyles>
      <Table columns={columns} data={data} />
    </BasicTableStyles>
  );
};

export default OrdersTable;
