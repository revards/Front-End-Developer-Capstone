import React from 'react'
import dish from './img/restauranfood.jpg'
import './Hero.css'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <section className='hero'>
      <div className='grid-container'>
        <div className="hero-info">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link className='button-home' to={"/reserve"}>Reserve a Table</Link>
        </div>
        <img src={dish} alt='Dish example'/>
        </div>
    </section>
  )
}
