import React from 'react';
import './navBarStyle.scss';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg';

const NavBar = ({currentUser}) => (
    <nav className='header '>
        <div className='nav-container'>
            <Link className='logo-container ' to='/'>
                <Logo className='logo '></Logo>
                <p>Crown</p>
            </Link>
            
            <div className="pages">
                <Link className='page' to='/shop'> SHOP</Link>
                <Link className='page' to='/shop'> CONTACT </Link>
                {

                currentUser ?
                 <div>
                      <i className="fa fa-user-circle-o" ></i>
                       <button className="signout-btn"  >Sign Out</button>
                  </div>
                :
                <Link to='/LogIn'className='signIn-btn' >Sign In</Link>
                }
            </div>
        </div>
    </nav>
)

export default NavBar;