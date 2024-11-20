import React from 'react';
import './table.css';


const Table = ({ columns, data }) => {
  return (
    <table className="table-wrap">
      <colgroup>
        {columns.map((col, index) => (
            <col 
              key={index}
              style={{ width: col.colWidth ? col.colWidth : 'auto' }}
            />
          ))}
      </colgroup>
      <thead>
        <tr>
          {columns.map((col, index) => col.header ? (
            <th 
              key={index}
              colSpan={col.colspan || undefined}
              rowSpan={col.rowspan || undefined}
              className="tit"
            >
              {col.header}
            </th>
          ) : null
        )}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => {
              const cell = row[col.accessor];
              const colSpanValue = row.colspan && row.colspan[col.accessor] ? row.colspan[col.accessor] : col.colspan || 1;
              const rowSpanValue = row.rowspan && row.rowspan[col.accessor] ? row.rowspan[col.accessor] : col.rowspan || 1;

              if (!cell) return null;

              return (
                <td
                  key={colIndex}
                  colSpan={colSpanValue > 1 ? colSpanValue : undefined}
                  rowSpan={rowSpanValue > 1 ? rowSpanValue : undefined}
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