import logo from './logo.svg';
import './App.css';
import React , {useEffect , useState} from 'react';
import AccountList from './AccountList';
// const url = https://jsonplaceholder.typicode.com/todos/1


function App() {
  // return (

    // useEffect(() => {
    //   const fetchdata = async () = {
    //     const result = await fetch(url);
    //     console.log(result);
    //   }
    //   fetchdata();
    // })
    const [data , setData] = useState([]);

    // fetch("https://jsonplaceholder.typicode.com/todos/1").then((result) =>{
    // //     result.json().then((resp) =>{
    // //       console.warn("result" , resp)
    // //       setData(resp)
    // //     })
    // // })
    // fetch('https://api.koios.rest/api/v0/account_list')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    useEffect(()=>{
      fetch("https://api.koios.rest/api/v0/account_list").then((result) =>{
        result.json().then((resp) =>{
          console.log(resp)
          setData(resp)
        })
      })
    }, [])

    return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <div className=  'navbar'> 
        <h1> Total Stake Counter for Cardano, Polkadot, and Kusama Chains</h1>
      </div>
      <h6>Api fetch done console 
      <AccountList />
      </h6>
      <table>
        <tr>
          <td>id</td>
          <td>state_count</td>
        </tr>
        {
          data.map((item)=>{
            <tr>{item.id}</tr>
          },[])
        }
      </table>

    </div>



  );
}

export default App;
