import React from 'react';
import PropTypes from 'prop-types';

const Headline = () => {
        return <h2 className="text-center">Subtitle created with react</h2>
      },
      Greeting = ({ name, age }) => ( // Destructuring props object
        <p className="text-primary text-center">Testing rendering with JSX - welcome to the react world, {name}, you {age} year old bastard!</p> // Implicit return
      )

export const App = () => {
  return (
    <div>
      <Headline />
      <Greeting name="Daniel" age={20} />
    </div>
  )
};

export const SecondApp = () => {
  return <h1>TEST</h1>
};

Greeting.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
