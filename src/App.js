 
import { useState } from 'react';
import './App.css';
import CoarseForm from './Components/CoarseForm';
import CoarseList from './Components/List/CoarseList';

function App() {
  const [coarse, setCoarse] = useState([]); 

  const saveCoarseHandler = (coarseName) => {
    setCoarse((prevCoarse) => {
      return [ ...prevCoarse, coarseName];
    });
  };

  return (
    <div className="App">  
      <CoarseForm onSaveCoarse={saveCoarseHandler} />
      <CoarseList item={coarse} />
    </div>
  );
}

export default App;
