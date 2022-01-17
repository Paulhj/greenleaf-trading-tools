import { useTable } from "react-table";
//import { Link } from "react-router-dom";
import { useUpdateTickerMutation } from "../../app/services/tickers";

const TickersTableDef = ({ columns, data, stdDev }) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const [updateTicker] = useUpdateTickerMutation();

  const updateMyData = (rowIndex, tickerId, value) => {
    console.log(rowIndex + " : " + tickerId + " : " + value);
    updateTicker({
      id: tickerId,
      name: "",
      excludeFromTrading: value,
    });
  };

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
                if (cell.column.Header === "Exclude From Trading") {
                  //const test = `/tickers/${cell.value}`;
                  return (
                    <td {...cell.getCellProps()}>
                      <input
                        type="checkbox"
                        checked={cell.value}
                        onChange={(event) =>
                          updateMyData(
                            parseInt(row.id),
                            row.values.id,
                            event.target.checked
                          )
                        }
                      />
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

export default TickersTableDef;
