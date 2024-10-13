import { useEffect, useState } from 'react'; 

import axios from 'axios';

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss'

function App() {
  const [text, setText] = useState('');

  const onChangeHandler = (e) => {
    setText(e.target.value)
  }
  useEffect(() => { 
    (async ()=> {
      const path = process.env.REACT_APP_API_PATH
      const result = await axios.get(path)
      console.log('result', result); // 會出現兩次，因為 StrictMode 嚴謹模式
      
    })()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" className="btn btn-primary">Primary</button>

        <Input text="標題" id="sampleText" value={text} onChangeHandler={onChangeHandler} />
        {text}
      </header>
    </div>
  );
}

export default App;
