import React, { FC } from 'react';
import { GrUser as MaleIcon, GrUserFemale as FemaleIcon } from 'react-icons/gr';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Toolbar,
  ColumnChooser,
  Resize,
} from '@syncfusion/ej2-react-grids';
import people from '../data/People.json';

export const DataGrid: FC<{}> = () => {
  const genterTemplate = (props: any) => {
    if (props.Gender === 'Male') {
      return <MaleIcon />;
    } else if (props.Gender === 'Female') {
      return <FemaleIcon />;
    }
    return props.Gender;
  };

  const ageTemplate = (props: any) => {
    if (props.Age === null) {
      return '--';
    }
    return props.Age;
  };

  return (
    <GridComponent
      dataSource={people.value}
      allowPaging={true}
      pageSettings={{ pageSize: 5 }}
      allowSorting={true}
      allowFiltering={true}
      toolbar={['ColumnChooser']}
      showColumnChooser={true}
      allowResizing={true}
    >
      <ColumnsDirective>
        <ColumnDirective field="FirstName" headerText="First Name" />
        <ColumnDirective field="LastName" headerText="Last Name" />
        <ColumnDirective
          field="Gender"
          template={genterTemplate}
          headerText="Gender"
        />
        <ColumnDirective field="Age" template={ageTemplate} headerText="Age" />
        <ColumnDirective field="Emails" headerText="Emails" />
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, ColumnChooser, Resize]} />
    </GridComponent>
  );
};
