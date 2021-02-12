import React, { Fragment, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
    Link
  } from "react-router-dom";
import {Button} from 'react-bootstrap'

const TopNav = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    props.toggleSide(isOpen)
  return (
      <Fragment>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark-brown">
            <Link className="navbar-brand" to="/">Rapid Response</Link>
            <Button className="btn btn-link btn-sm order-1 order-lg-0" onClick={toggle}>
                <FontAwesomeIcon icon={faBars} />
            </Button>
            {/* <!-- Navbar Search--> */}
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
            {/* <!-- Navbar--> */}
            {/* <ul className="navbar-nav ml-auto ml-md-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">Settings</a>
                        <a className="dropdown-item" href="#">Activity Log</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="login.html">Logout</a>
                    </div>
                </li>
            </ul> */}
        </nav>
        
            
        </Fragment>
  )
}

export default TopNav