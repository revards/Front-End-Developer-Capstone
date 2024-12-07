import { About } from "./About";
import { Hero } from "./Hero";
import { Specials } from "./Specials";
import { Testimonials } from "./Testimonials";

import React from 'react'

export const Home = () => {
  return (
    <>
    <Hero/>
    <Specials/>
    <Testimonials/>
    <About/>
    </>
  )
}
