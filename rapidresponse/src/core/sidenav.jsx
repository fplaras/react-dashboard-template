import React, { Fragment } from 'react'
import Dashboard from '../pages/dashboard/containers/dashboard'
import MyJobs from '../pages/jobs/containers/myjobs';

import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


const SideNav = (props) => {

  return (
      <Fragment>
          <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Core</div>
                    <Link className="nav-link" to="/">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </Link>
                    <div className="sb-sidenav-menu-heading">Interface</div>
                    <Link className="nav-link" to="/myjobs">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        My Jobs
                    </Link>
                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <a className="nav-link" href="layout-static.html">Static Navigation</a>
                            <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                        </nav>
                    </div>
                  
                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                           
                            <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="login.html">Login</a>
                                    <a className="nav-link" href="register.html">Register</a>
                                    <a className="nav-link" href="password.html">Forgot Password</a>
                                </nav>
                            </div>
                         
                            <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="401.html">401 Page</a>
                                    <a className="nav-link" href="404.html">404 Page</a>
                                    <a className="nav-link" href="500.html">500 Page</a>
                                </nav>
                            </div>
                        </nav>
                    </div>
                    <div className="sb-sidenav-menu-heading">Addons</div>
                    <a className="nav-link" href="charts.html">
                        <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                        Charts
                    </a>
                    <a className="nav-link" href="tables.html">
                        <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                        Tables
                    </a>
                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                Start Bootstrap
            </div>
        </nav>
    </div>
    <div id="layoutSidenav_content">
        <main>
            <div className="container-fluid">
    
              <Switch>
                <Route exact path="/" component={Dashboard}></Route>
                <Route path="/myjobs" component={MyJobs}></Route>
              </Switch>
           
            </div>
        </main>
        <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Copyright &copy; Your Website 2020</div>
                    <div>
                       
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
       
      </Fragment>
    
  )
}

export default SideNav