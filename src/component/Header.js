import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    const header = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10px'
    }

    return(
        <header>
            <div className="header" style={header}>
            <img style={{height: '55px'}} src='/images/logo.png' className='logo' alt="company logo" />
            <h1 style={{fontWeight: 'normal', fontSize: '18px'}}>Company Name</h1>
            </div>
            <div className="navbar" style={header}>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/products">Products</Link></p>
                    <p><Link to="/login">Login</Link></p>
            </div>
        </header>
    );
};

export default Header;