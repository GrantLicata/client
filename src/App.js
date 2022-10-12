import Form from './components/Form';
import Box from './components/Box';
import './App.css';
import { useState } from 'react';


function App() {

  const [boxes, setBoxes] = useState([])

  return (
    <div className="App">
      <Form boxes={boxes} setBoxes={setBoxes}/>
      {
        boxes.map((box) => {
          return <Box color={box.color}/>
        })
      }
    </div>
  );
}

export default App;
