/* eslint-disable react/prop-types */

import Rating from 'react-rating';
import './Testimonial.css';

export const Testimonial = ({customer}) => {
  return (
    <article className="testimonial">
      <img src={customer.image} alt={customer.name} />
      <div className="testimonial-content">
        <h4>{customer.name}</h4>
        <Rating
          initialRating={customer.rating}
          emptySymbol={<span className='star empty'>★</span>}
          fullSymbol={<span className='star full'>★</span>}
          halfSymbol={<span className='star half'>★</span>}
          fractions={2}
          readonly={true}
        />
        <blockquote><p>{'"'}{customer.says}{'"'}</p></blockquote>
      </div>
    </article>
  )
}
