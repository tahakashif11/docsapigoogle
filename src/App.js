import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Logout from './components/logout';
import {gapi} from 'gapi-script';
import { useEffect,useState } from 'react';
const API_KEY="AIzaSyAam0uY1AYbfIY8wY4KoKF9WW9SJF5JDII"
const CLIENT_ID="799235060590-685jtqilr7lqaloii5k58iuijuaig3am.apps.googleusercontent.com"
const CLIENT_SECRET="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"
const scopes="https://www.googleapis.com/auth/drive";

function App() {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        apiKey:API_KEY,
        clientId:CLIENT_ID,
        scope:scopes
      })
    };
    gapi.load('client:auth2',start)

  })
  function creatFile(tag){
    var accesToken="ya29.a0AfB_byDJBitIBqgDYHf7yUN-PoN1C_wP9Nz9Vd7blTNppvakuUC081hNj3o9MKjhtfhdCWmOhE4TiR2TV9uudZIhW6xQ04UDrbW1QOMibq_eyyLsLC3oZIH7D5gTNP6jA0onPp5y76QER589dejBpLb8ErupmesdQQaCgYKAfASARASFQHGX2MiwjXZ7ycZNY2qzYeXhp6Wvw0169";
    fetch('https://docs.googleapis.com/v1/documents',{
      method:'POST',
      headers: new Headers({'Authorization': 'Bearer ' +accesToken})
  }).then((res)=>{
    return res.json();
  }).then(function(val){
console.log(val);
console.log(val.documentId);
  })

    
  }
  return (
    <div className="App">
    <Login/>
    <Logout/>
    <button onClick={()=>creatFile('cpts')}>notses</button>
      
    </div>
  );
}

export default App;
