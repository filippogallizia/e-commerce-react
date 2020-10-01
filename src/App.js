import React from 'react';
import Cart from "./Pages/Cart";
import Photos from "./Pages/Photos";
import Header from "./components/Header"
import {Switch, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <h1>Home page</h1>
      <Switch>
        <Route exact path= "/"><Photos /></Route>
        <Route path= "/cart"><Cart /></Route>
      </Switch>
    </div>
  )
}

export default App;
