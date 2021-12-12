import { useTable } from "react-table";
import { Link } from "react-router-dom";

const PairBlockAnalysisTableDef = ({ columns, data, pairTradeBlockId }) => {
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
                if (cell.column.Header === "S1 Open") {
                  return (
                    <td bgcolor="lightblue" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                }

                if (cell.column.Header === "S1 Close") {
                  return (
                    <td bgcolor="magenta" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                }

                if (cell.column.Header === "S2 Open") {
                  return (
                    <td bgcolor="lightblue" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                }

                if (cell.column.Header === "S2 Close") {
                  return (
                    <td bgcolor="magenta" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                }

                if (cell.column.Header === "Type" && cell.value === "CLOSE") {
                  return (
                    <td bgcolor="green" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                }

                if (
                  cell.column.Header === "Type" &&
                  cell.value === "STOP_LOSS"
                ) {
                  return (
                    <td bgcolor="red" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                }

                if (
                  cell.column.Header === "Type" &&
                  cell.value === "END_OF_DAY"
                ) {
                  return (
                    <td bgcolor="yellow" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                }

                if (cell.column.Header === "PA-Details") {
                  const s1 = row.cells[1].value;
                  const s2 = row.cells[2].value;
                  const url = `/pairanalysisreport/${s1}/${s2}/${pairTradeBlockId}`;
                  return (
                    <td {...cell.getCellProps()}>
                      <Link to={url}>Pair Analysis</Link>
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

export default PairBlockAnalysisTableDef;
