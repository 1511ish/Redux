import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import classes from './Navbar.module.css';

export default function Navbar() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch({type: 'logout'});
    }
    return (
        <nav className={classes.navbar}>
            <div>
                <h2>Redux Auth</h2>
            </div>
            {
                isAuthenticated &&
                <div>
                    <ul>
                        <li>My Products</li>
                        <li>My Sales</li>
                        <li><button onClick={logoutHandler}>Logout</button></li>
                    </ul>
                </div>
            }
        </nav>
    )
}
