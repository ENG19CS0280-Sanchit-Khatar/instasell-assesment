import React from "react";
import './styles.css'
import {
    SearchIcon,
    PersonIcon,
    SettingsIcon
  } from '@shopify/polaris-icons';
const NavbarComponent = () =>{
    return(
        <nav className="navbar">
            <div className = "leftSide">
                <navItem className ="navItem">Home</navItem>
                <navItem className ="navItem">Orders</navItem>
                <navItem className ="navItem">Integrations</navItem>
                <navItem className ="navItem">Tracking Page</navItem>
                <navItem className ="navItem">Partner with Us</navItem>
            </div>
            <div className="rightSide">
            <div className="search">
                <SearchIcon className="icon"/> Search
            </div>
            <div className="IconContainers">
                <PersonIcon className="icon"/> Account
            </div>
            <div className="IconContainers">
                <SettingsIcon className="icon" /> Settings
            </div>
            </div>
        </nav>
    )
}
export default NavbarComponent;