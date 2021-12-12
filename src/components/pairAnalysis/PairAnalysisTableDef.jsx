import { useTable } from "react-table";
import { useReportParams } from "../../hooks/useReportParams";

const PairAnalysisTableDef = ({ columns, data, stdDev }) => {
  const [state] = useReportParams();
  // eslint-disable-next-line no-unused-vars
  const stdDevToOpenTrade = state.stdDevToOpenTrade;
  // eslint-disable-next-line no-unused-vars
  const stdDevToCloseTrade = state.stdDevToCloseTrade;
  // eslint-disable-next-line no-unused-vars
  const stdDevToStopLoss = state.stdDevToStopLoss;

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                /*
                if (cell.column.Header === "A. Std Dev" && cell.value > 1) {
                  return (
                    <td bgcolor="yellow" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                }

                if (cell.column.Header === "A. Std Dev" && cell.value > 2) {
                  return (
                    <td bgcolor="green" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                }
                */
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PairAnalysisTableDef;
