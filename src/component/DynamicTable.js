import React from 'react';
import HocComponent from '../hoc';

const DynamicTable = ({ data, columns }) => {
  return (
    <table className='table'>
      <thead className='bg-light'>
        <tr>
          {columns.map((column) => (
            <th key={column.key} >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const EnhancedTable= HocComponent(DynamicTable)
export default EnhancedTable;
