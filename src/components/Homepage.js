import React from 'react';
import { NavLink } from 'react-router-dom';

const Homepage = () => (
  <div className="homepage">
    <h1>Welcome</h1>
    <p className="top-gap">Checkout random greetings by clicking the link below</p>
    <p className="small-gap"><NavLink to="/greeting">Greeting</NavLink></p>
  </div>
);

export default Homepage;
