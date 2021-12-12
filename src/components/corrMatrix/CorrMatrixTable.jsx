import { useTable } from "react-table";

const CorrMatrixTable = ({ columns, data, coefficientCutoff = 0.91 }) => {
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
                if (cell.value === 1) {
                  return (
                    <td bgcolor="yellow" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                }

                if (cell.value > coefficientCutoff) {
                  return (
                    <td bgcolor="green" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                }

                if (cell.value < coefficientCutoff * -1) {
                  return (
                    <td bgcolor="red" {...cell.getCellProps()}>
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

export default CorrMatrixTable;
