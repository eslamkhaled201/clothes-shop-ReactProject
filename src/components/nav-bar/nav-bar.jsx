import React from 'react';
import './navBarStyle.scss';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg';

const NavBar = (props) => {
console.log("🚀 ~ file: nav-bar.jsx ~ line 7 ~ NavBar ~ props", props)
    let { currentUser, mainPath } = props;
    console.log("🚀 ~ file: nav-bar.jsx ~ line 9 ~ NavBar ~ currentUser, mainPath", currentUser, mainPath)
    
    return (<nav className='header '>
        <div className='nav-container'>
            <Link className='logo-container ' to={mainPath}>
                <Logo className='logo '></Logo>
                <p>Crown</p>
            </Link>

            <div className="pages">
                <Link className='page' to={`${mainPath}shop`}> SHOP</Link>
                <Link className='page' to={mainPath}> CONTACT </Link>
                {

                    currentUser ?
                        <div>
                            <i className="fa fa-user-circle-o" ></i>
                            <button className="signout-btn"  >Sign Out</button>
                        </div>
                        :
                        <Link to={`${mainPath}logIn`} className='signIn-btn' >Sign In</Link>
                }
            </div>
        </div>
    </nav>)
}

export default NavBar;