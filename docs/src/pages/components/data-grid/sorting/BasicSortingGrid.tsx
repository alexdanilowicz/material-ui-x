import * as React from 'react';
import { DataGrid, SortDirection } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

export default function BasicSortingGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        sortModel={[
          {
            field: 'commodity',
            sort: 'asc' as SortDirection,
          },
        ]}
      />
    </div>
  );
}
