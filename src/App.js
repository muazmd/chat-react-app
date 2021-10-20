import React from 'react';
import { useStateValue } from './StateProvider';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom'
import './App.css';
import ChatbarSide from './ChatbarSide';
import Login from './Login'
import Chat from './Chat'

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
    {!user ? (
      <Login />
    ) : (
      <div className="app_body">

     
      <Router>
     
      <ChatbarSide className="sidebar" />
      <Switch>
       <Route path="/rooms/:roomId"> 
       <Chat className="chat" />
       </Route>
       <Route path="/">
         <Chat  className="chat"/>
       </Route>
        </Switch>
    
      </Router>
       
    </div>
    )}

  </div>
  );
}

export default App;
