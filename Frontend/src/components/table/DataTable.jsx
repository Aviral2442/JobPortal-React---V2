import { flexRender } from '@tanstack/react-table';
import clsx from 'clsx';
import { Table } from 'react-bootstrap';
import { TbArrowDown, TbArrowUp } from 'react-icons/tb';
const DataTable = ({
  table,
  className = '',
  emptyMessage = 'Nothing found.',
  showHeaders = true
}) => {
  const columns = table.getAllColumns();
  return <Table responsive hover className={clsx('table table-custom table-centered table-select w-100 mb-0', className)}>
            {showHeaders && <thead className="bg-light align-middle bg-opacity-25 thead-sm">
                {table.getHeaderGroups().map(headerGroup => <tr key={headerGroup.id} className="text-uppercase fs-xxs">
                        {headerGroup.headers.map(header => <th key={header.id} onClick={header.column.getToggleSortingHandler()} style={{
          cursor: header.column.getCanSort() ? 'pointer' : 'default',
          userSelect: 'none'
        }}>
                                <div className="d-flex align-items-center">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    {header.column.getCanSort() && ({
              asc: <TbArrowUp className="ms-1" />,
              desc: <TbArrowDown className="ms-1" />
            }[header.column.getIsSorted()] ?? null)}
                                </div>
                            </th>)}
                    </tr>)}
                </thead>}
            <tbody>
            {table.getRowModel().rows?.length ? table.getRowModel().rows.map(row => <tr key={row.id}>
                        {row.getVisibleCells().map(cell => <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>)}
                    </tr>) : <tr>
                    <td colSpan={columns.length} className="text-center py-3 text-muted">
                        {emptyMessage}
                    </td>
                </tr>}
            </tbody>
        </Table>;
};
export default DataTable;