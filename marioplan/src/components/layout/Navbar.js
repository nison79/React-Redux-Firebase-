import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutInLinks from './SignedOutLinks'


const Navbar = () => {
    return (
        <nav className="nav-wrapper blue-grey lighten-2">
            <div className="container">
                <Link to="/" className="brand-logo">George Plans</Link>
                <SignedInLinks/>
                <SignedOutInLinks/>
            </div>
        </nav>
    )
}

export default Navbar
