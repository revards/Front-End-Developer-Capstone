import React from 'react'
import './Specials.css';
import greekSaladImg from './img/greek salad.jpg' ;
import bruchettaImg from './img/bruchetta.svg';
import lemonDessertImg from './img/lemon dessert.jpg';
import { MealItems } from '../../MealItem';
import { Link } from 'react-router-dom';
const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImg,
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives 
    and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. `,
  },
  {
    name: 'Bruchetta',
    image: bruchettaImg,
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has been smeared 
    with garlic and seasoned with salt and olive oil. `,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImg,
    price: '$5.00',
    description: `This comes straight from grandma’s recipe book, every last 
    ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

export const Specials = () => {
  return (
    <section className='specials grid-container'>

      <header>
        <h2>This weeks specials!</h2>
        <Link className='button-home' to={"/reserve"}>Online Menu</Link>
      </header>
      {meals.map((meal, index) =>
        <MealItems key={index} meal={meal} />
      )}
    </section>
  )
}
