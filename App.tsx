import React, { useMemo, useState } from 'react';
import './style.css';
import { DataGrid } from './components/DataGrid';

export default function App() {
  const [showGrid, setShowGrid] = useState(true);
  const handleShowGrid = () => {
    setShowGrid(!showGrid);
  };

  const gridButton = useMemo(
    () => (showGrid ? 'Nascondi' : 'Mostra'),
    [showGrid]
  );

  return (
    <div className="container">
      {showGrid && <DataGrid />}
      <div className="text-center">
        <button onClick={handleShowGrid}>{gridButton}</button>
      </div>
    </div>
  );
}
