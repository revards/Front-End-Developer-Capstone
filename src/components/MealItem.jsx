import React from 'react'
import './MealItem.css'

export const MealItems = ( {meal} ) => {
  return (
    <article className='meal-item'>
      <img src={meal.image} alt={meal.name} />
      <header>
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </header>
      <div className='meal-description'>
        <p>{meal.description}</p>
        <button>Order a delivery</button>
      </div>
    </article>
  )
}
