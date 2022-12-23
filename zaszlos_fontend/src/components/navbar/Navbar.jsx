import React from 'react';
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";


const  Navigation = () => {
    return (
        <>
        <nav class="nav-container sticky">
            <div class="nav-header">
                        <p>Zászló Shop</p>
            </div>
            <div class="nav-links">    
                <ul>       
                    <li><Link to="/flags">Elérhető zászlók</Link></li>   
                    <li><Link to="/add">Zászló hozzáadása</Link></li>                              
                </ul>
            </div>
        </nav>
        <Outlet />
        </>
    )
}
    

export default Navigation;

