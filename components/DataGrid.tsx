import React, { FC, useEffect, useRef } from 'react';
import { GrUser as MaleIcon, GrUserFemale as FemaleIcon } from 'react-icons/gr';
import {
  GridComponent,
  ColumnChooser,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Toolbar,
  Resize,
} from '@syncfusion/ej2-react-grids';
import people from '../data/People.json';

export const DataGrid: FC<{}> = () => {
  const gridRef = React.useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.autoFitColumns([
        'FirstName',
        'LastName',
        'Gender',
        'Age',
      ]);
    }
  }, [gridRef.current]);

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
      ref={gridRef}
      dataSource={people.value}
      allowPaging={true}
      pageSettings={{ pageSize: 5 }}
      allowSorting={true}
      allowFiltering={true}
      toolbar={['ColumnChooser']}
      showColumnChooser={true}
      allowResizing={true}
      resizeSettings={{ mode: 'Auto' }}
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
