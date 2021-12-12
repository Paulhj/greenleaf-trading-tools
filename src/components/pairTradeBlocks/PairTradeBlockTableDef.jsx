import { useTable } from "react-table";
import { Link } from "react-router-dom";
import { useDeletePairTradeBlockMutation } from "../../app/services/pairTradeBlocks";

const PairTradeBlockTableDef = ({ columns, data, stdDev }) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const [deletePairTradeBlock] = useDeletePairTradeBlockMutation();

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
                if (cell.column.Header === "RA") {
                  const test = `/pairtradeblockanalysis/${cell.value}`;
                  return (
                    <td {...cell.getCellProps()}>
                      <Link to={test}>Run Analysis</Link>
                    </td>
                  );
                }

                if (cell.column.Header === "Delete") {
                  return (
                    <td>
                      <div>
                        <Link to={`/pairtradeblockanalysis/${cell.value}`}>
                          Run Analysis
                        </Link>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            // eslint-disable-next-line no-restricted-globals
                            if (confirm("Do you want to really delete this?")) {
                              deletePairTradeBlock(cell.value);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  );
                }

                if (
                  cell.column.Header === "Status" &&
                  cell.value === "COMPLETED"
                ) {
                  return (
                    <td bgcolor="green" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                }

                if (
                  cell.column.Header === "Status" &&
                  cell.value === "RUNNING"
                ) {
                  return (
                    <td bgcolor="yellow" {...cell.getCellProps()}>
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

export default PairTradeBlockTableDef;
