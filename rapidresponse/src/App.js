import './App.css';
import TopNav from './core/components/topnav';
import SideNav from './core/components/sidenav';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import React, { useState } from 'react'

function App() {

  const [sideNavHide, setSidenav] = useState(false)

  if (sideNavHide)
    document.body.classList.add('sb-sidenav-toggled');
  else
    document.body.classList.remove('sb-sidenav-toggled');

  return (
    <Router>
      <TopNav toggleSide={setSidenav}/>
      <SideNav />
      
    </Router>
  );
}

export default App;
