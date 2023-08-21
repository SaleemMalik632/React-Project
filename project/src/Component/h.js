import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li> <Link to={'home'}>  Collections </Link> </li>
                <li> <Link to={'home'}> Collections </Link> </li>
                <li> <Link to={'home'}>  Collections </Link> </li>
                <li> <Link to={'home'}>   Collections </Link> </li> 

            </ul>
        </nav>
    ); 
};

export default Navbar;
