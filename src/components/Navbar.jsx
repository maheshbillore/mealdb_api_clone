import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css';
import MoneyContext from '../context/MoneyContext';

const Navbar = () => {
    const [isUserLogined, setUserLogedIn] = useState(false);
    const [navbarBgColor,setNavbarBgColor] = useState("bg-danger");
    const navigate = useNavigate();
    const moneyContextData=useContext(MoneyContext);
     console.log(moneyContextData,'moneycontextap'); 
    const setLoginUser = () => {
        setUserLogedIn(true);

    }
    useEffect(() => {
        if (isUserLogined) {
            navigate('/dashboard');
        } else {
            navigate('/');
        }
    }, [isUserLogined]);
    const logOut = () => {
        setUserLogedIn(false);
    }

    if (isUserLogined) {
        return (
            <div className='nav_bar' >
                <Link to={'/'} className='left' >My React </Link>
                <div className='right' >
                    <Link to={'/counter'} className='items' >Counter</Link>
                    <Link to={'/products'} className='items' >Products</Link>
                    <Link to={'/meals'} className='items' >Meals</Link>
                    <Link to={'/movices'} className='items' >Movices</Link>
                    <Link to={'/profile'} className='items' > Profile</Link>
                    <Link to={'/dashboard'} className='items' > Dashboard</Link>
                    <Link onClick={() => { logOut() }} className='items' >LogOut</Link> 
                </div>
            </div>
        )
    }

    if (!isUserLogined) {
        return (
            <div className='nav_bar' >
                <Link to={'/'} className='left' >My React</Link>
                <div className='right' >
                    <Link to={'/counter'} className='items' >Counter</Link>
                    <Link to={'/products'} className='items' >Products</Link>
                    <Link to={'/meals'} className='items' >Meals</Link>
                    <Link to={'/movices'} className='items' >Movices</Link> 
                    <Link onClick={() => { setLoginUser() }} className='items' >Login</Link>
                </div>
            </div>
        )
    }
}

export default Navbar