import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <table className="table-wrap">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => {
              const cell = row[col.accessor];
              const colspan = col.colspan ? col.colspan(row) : 1;
              const rowspan = col.rowspan ? col.rowspan(row) : 1;

              if (!cell) return null;

              return (
                <td
                  key={colIndex}
                  colSpan={colspan > 1 ? colspan : undefined}
                  rowSpan={rowspan > 1 ? rowspan : undefined}
                >
                  {cell}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;