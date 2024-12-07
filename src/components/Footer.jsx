import React from 'react'
import logo from '../images/Logo.svg'
import './Footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='grid-container'>
        <img id='footer-img' src={logo} alt='Little Lemon logo'/>
        <ul className='navigation'>
            <li>Doormat Navigation</li>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>About</Link></li>
            <li><Link to={"/"}>Menu</Link></li>
            <li><Link to={"/reserve"}>Resevations</Link></li>
            <li><Link to={"/"}>Order Online</Link></li>
            <li><Link to={"/"}>Login</Link></li>
        </ul>
        <ul className='contact'>
            <li>Contact</li>
            <li><Link to={"/"}>Adress</Link></li>
            <li><Link to={"/"}>Phone number</Link></li>
            <li><Link to={"/"}>Email</Link></li>
        </ul>
        <ul className='social-links'>
            <li>Social media links</li>
            <li><Link to={"/"}>Adress</Link></li>
            <li><Link to={"/"}>Phone number</Link></li>
            <li><Link to={"/"}>Email</Link></li>
        </ul>
        </div>
    </footer>
  )
}
