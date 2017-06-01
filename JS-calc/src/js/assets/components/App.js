import React from 'react';
import PropTypes from 'prop-types';

// const Headline = () => {
//         return <h2 className="text-center">Subtitle created with react</h2>
//       },
//       Greeting = ({ name, age }) => ( // Destructuring props object
//         <p className="text-primary text-center">Testing rendering with JSX - welcome to the react world, {name}, you {age} year old bastard!</p> // Implicit return
//       )

export class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      pendingItems: ['veggies', 'bread', 'fruits', 'bananas'],

    }
  }
  render(){
    const { pendingItems } = this.state;
    return (
      <div>
         <h1>Shopping list</h1>
         <ul>
           {
             pendingItems.map((item, key) => {
               return <li key={key}>{item}</li>
             })
           }
         </ul>
      </div>
    )
  }
}

// export const App = () => {
// };

export const SecondApp = () => {
  return <h1>TEST</h1>
};
//
// Greeting.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }
