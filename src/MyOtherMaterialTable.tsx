import React, {useState} from 'react';
import MaterialTable from 'material-table';

// https://material-table.com/#/docs/get-started

const MyOtherMaterialTable = () => {
  return (
  <MaterialTable
      title="Simple Action Preview"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'America', 63: 'Australia' },
        },
      ]}
      data={[
        { name: 'Matt', surname: 'Sol', birthYear: 1987, birthCity: 63 },
        { name: 'Jim', surname: 'Was', birthYear: 2017, birthCity: 34 },
      ]}        
      actions={[
        {
          icon: 'save',
          tooltip: 'Save User',
          onClick: (event, rowData) => alert("You saved " + JSON.stringify(rowData))
        }
      ]}
    />
  );
};

export default MyOtherMaterialTable;
