import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Chat from './Comp/Chat'
import Join from './Comp/Join'
function App(props) {

  return (
    <Router>
<Route path='/' exact component={Join} />
<Route path='/Chat' component={Chat}/>

    </Router>
  );
}

export default App;