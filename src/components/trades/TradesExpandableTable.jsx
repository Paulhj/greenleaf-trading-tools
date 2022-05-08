import React from "react";
import { useTable, useExpanded } from "react-table";
import { Link } from "react-router-dom";
// A simple way to support a renderRowSubComponent is to make a render prop
// This is NOT part of the React Table API, it's merely a rendering
// option we are creating for ourselves in our table renderer
const TradesExpandableTable = ({
  columns: userColumns,
  data,
  renderRowSubComponent,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
  } = useTable(
    {
      columns: userColumns,
      data,
    },
    useExpanded // We can useExpanded to track the expanded state
    // for sub components too!
  );

  /*
      <pre>
        <code>{JSON.stringify({ expanded: expanded }, null, 2)}</code>
      </pre>
  */

  return (
    <>
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
              // Use a React.Fragment here so the table markup is still valid
              <React.Fragment {...row.getRowProps()}>
                <tr>
                  {row.cells.map((cell) => {
                    if (
                      cell.column.Header === "Status" &&
                      (cell.value === "ACTIVE_SL" || cell.value === "ACTIVE_LS")
                    ) {
                      return (
                        <td bgcolor="#667799" {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    }

                    if (
                      cell.column.Header === "Status" &&
                      cell.value === "STOP_LOSS"
                    ) {
                      return (
                        <td bgcolor="#dd7788" {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    }

                    if (
                      cell.column.Header === "Status" &&
                      cell.value === "CLOSE"
                    ) {
                      return (
                        <td bgcolor="#7a9460" {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    }

                    if (
                      cell.column.Header === "Status" &&
                      cell.value === "END_OF_DAY"
                    ) {
                      return (
                        <td bgcolor="#f2e090" {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    }

                    if (
                      cell.column.Header === "Status" &&
                      cell.value === "CLOSE_MANUAL"
                    ) {
                      return (
                        <td bgcolor="#f2e090" {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    }

                    if (cell.column.Header === "Total" && cell.value >= 0) {
                      return (
                        <td bgcolor="#7a9460" {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    }

                    if (cell.column.Header === "Total" && cell.value < 0) {
                      return (
                        <td bgcolor="#dd7788" {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    }

                    if (cell.column.backgroundGroupId === "PTO") {
                      return (
                        <td bgcolor="#FF9966" {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    }

                    if (cell.column.backgroundGroupId === "PTC") {
                      return (
                        <td bgcolor="#FFFDD0" {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    }

                    if (cell.column.backgroundGroupId === "PLH") {
                      return (
                        <td bgcolor="#708090" {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    }

                    if (cell.column.backgroundGroupId === "PLA") {
                      return (
                        <td bgcolor="#828382" {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    }

                    if (cell.column.backgroundGroupId === "TS1") {
                      return (
                        <td bgcolor="#708090" {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    }

                    if (cell.column.backgroundGroupId === "TS2") {
                      return (
                        <td bgcolor="#B1B687" {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    }

                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
                {/*
                    If the row is in an expanded state, render a row with a
                    column that fills the entire length of the table.
                  */}
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>Showing {rows.length} rows</div>
    </>
  );
};

export default TradesExpandableTable;
