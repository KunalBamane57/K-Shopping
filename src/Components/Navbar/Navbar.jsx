import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

  const[menu,setMenu]=useState("shop");

  const {getTotalCartItems}=useContext(ShopContext)

  return (
    <div className='navbar h-17 flex flex-col md:flex-row p-2 justify-between pl-10 pr-10 bg-red-500 text-xl font-normal items-center'>
      <div className="nav-logo flex items-center text-2xl">
        <img className='h-16 w-18 rounded-xl p-2' src={logo} alt="" />
        <p className='font-medium text-slate-50'>K-Shopping</p>
      </div>
      <ul className="nav-menu box-1 flex flex-col md:flex-row list-none items-center text-slate-50 w-[25%]">
        <li className="pl-4 pr-4 cursor-pointer" onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li className="pl-4 pr-4 cursor-pointer" onClick={()=>{setMenu("mens")}}><Link to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li> 
        <li className="pl-4 pr-4 cursor-pointer" onClick={()=>{setMenu("womens")}}><Link to="womens">Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li className="pl-4 pr-4 cursor-pointer" onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button className="pl-2 pr-2 cursor-pointer">login</button></Link>
        <Link to='/cart'><img className="h-14 w-14 rounded-xl" src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
