import { useTable } from "react-table";
import { Link } from "react-router-dom";

const CorrMatrixMatchesTableDef = ({
  columns,
  data,
  stdDev,
  analysisReportCallback,
}) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const getColumnHeader = (column) => {
    if (column.Header === "Correlation Matrix Matches") {
      return (
        <th {...column.getHeaderProps()}>
          {column.render("Header")}{" "}
          <button onClick={analysisReportCallback}>Pair Analysis Report</button>
        </th>
      );
    }

    return <th {...column.getHeaderProps()}>{column.render("Header")}</th>;
  };
  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => getColumnHeader(column))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                if (cell.column.Header === "PA") {
                  const s1 = row.cells[0].value;
                  const s2 = row.cells[1].value;
                  const url = `/pairanalysisreport/${s1}/${s2}`;
                  return (
                    <td {...cell.getCellProps()}>
                      <Link to={url}>Pair Analysis</Link>
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

                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CorrMatrixMatchesTableDef;
