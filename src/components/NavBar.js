import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <nav>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/favorites'>Favorites</Link></li>
        </nav>
    )
}