import React from 'react';
import DataGrid, {
  Selection,
  FilterRow,
  Paging,
} from 'devextreme-react/data-grid';
import { data } from '../assets/data';
import 'devextreme/dist/css/dx.light.css';

const columns = ['ID', 'pv', 'uv', 'name', 'av' ];

class App extends React.Component {
 
  render() {
      return (
        <DataGrid
          dataSource={data}
          keyExpr="ID"
          defaultColumns={columns}
          showBorders={true}
        >
          <Selection
            mode="multiple"
          />
          <FilterRow visible={true}
            applyFilter="auto" />
          <Paging defaultPageSize={8} />
        </DataGrid>
      );
    }
  }

export default App;