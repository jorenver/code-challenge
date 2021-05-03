import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTextReverse from './components/AddTextReverse';
import TextList from './components/TextList';
import { useState } from 'react';

function App() {

  const [textList, setTextList] = useState([]);

  return (
    <div className="App">
      <AddTextReverse setTextList={setTextList}/>
      <TextList textList={textList}/>
    </div>
  );
}

export default App;
