 
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
  const removeHandler=(index)=>{
    const updateCoarse=[...coarse];
    updateCoarse.splice(index, 1);
    setCoarse(updateCoarse);
  }

  return (
    <div className="App">  
      <CoarseForm onSaveCoarse={saveCoarseHandler}  />
      <CoarseList item={coarse} onDeleteCoarse={removeHandler} />
    </div>
  );
}

export default App;
