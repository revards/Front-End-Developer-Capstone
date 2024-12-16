/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
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
        <Link>Order a delivery</Link>
      </div>
    </article>
  )
}
