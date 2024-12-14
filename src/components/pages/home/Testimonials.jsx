import "./Testimonials.css";
import customerImg1 from "./img/restaurant chef B.jpg";
import customerImg2 from "./img/restaurant chef B.jpg";
import customerImg3 from "./img/restaurant chef B.jpg";
import customerImg4 from "./img/restaurant chef B.jpg";
import { Testimonial } from "../../Testimonial";
const customers = [
  {
    name: "Jamie",
    image: customerImg1,
    rating: 4,
    says: `Nulla facilisi. Phasellus tincidunt libero non est tristique accumsan. 
    Sed scelerisque malesuada dolor. Ut dapibus blandit arcu sed condimentum. 
    Maecenas turpis ante, sagittis at eros tincidunt, ultricies suscipit orci.`,
  },
  {
    name: "Peter",
    image: customerImg2,
    rating: 5,
    says: `Nulla facilisi. Phasellus tincidunt libero non est tristique accumsan. 
    Sed scelerisque malesuada dolor. Ut dapibus blandit arcu sed condimentum. 
    Maecenas turpis ante, sagittis at eros tincidunt, ultricies suscipit orci.`,
  },
  {
    name: "Susan",
    image: customerImg3,
    rating: 4.5,
    says: `Nulla facilisi. Phasellus tincidunt libero non est tristique accumsan. 
    Sed scelerisque malesuada dolor. Ut dapibus blandit arcu sed condimentum. 
    Maecenas turpis ante, sagittis at eros tincidunt, ultricies suscipit orci.`,
  },
  {
    name: "April",
    image: customerImg4,
    rating: 3.5,
    says: `Nulla facilisi. Phasellus tincidunt libero non est tristique accumsan. 
    Sed scelerisque malesuada dolor. Ut dapibus blandit arcu sed condimentum. 
    Maecenas turpis ante, sagittis at eros tincidunt, ultricies suscipit orci.`,
  },
];

export const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="grid-container">
        <header>
          <h2>What people say about us!</h2>
        </header>
        {customers.map((customer, index) => (
          <Testimonial key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};
