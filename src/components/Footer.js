import React from 'react'
import logo from '../images/Logo.svg'

export const Footer = () => {
  return (
    <footer>
        <img src={logo} alt='Little Lemon logo'/>
        <ul>
            <li>Doormat Navigation</li>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Resevations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
        </ul>
        <ul>
            <li>Contact</li>
            <li><a>Adress</a></li>
            <li><a>Phone number</a></li>
            <li><a>Email</a></li>
        </ul>
        <ul>
            <li>Social media links</li>
            <li><a>Adress</a></li>
            <li><a>Phone number</a></li>
            <li><a>Email</a></li>
        </ul>
    </footer>
  )
}
