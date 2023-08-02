import logo from './logo.svg';
import './App.css';
import useState , {UseEffect} from 'react';

const url = https://api.koios.rest/api/v0/account_list

function App() {
  // return (

    UseEffect(() => {
      const fetchdata = async () = {
        const result = await fetch(url);
        console.log(result);
      }
      fetchdata();
    })

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
      </header>
    </div>


  );
}

export default App;
