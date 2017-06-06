import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import cli from './assets/evaluate';

export class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    const { listItems } = this.state;
    return (
      <div id="calculator">
        <div id="display"></div>
        <div id="keypad">
          <div id="functions">
            <button type="button" className="AC">AC</button>
            <button type="button" className="(-)">(-)</button>
            <button type="button" className="%">%</button>
          </div>
          <div id="numbers">
            <button type="button" className="0">0</button>
            <button type="button" className="1">1</button>
            <button type="button" className="2">2</button>
            <button type="button" className="3">3</button>
            <button type="button" className="4">4</button>
            <button type="button" className="5">5</button>
            <button type="button" className="6">6</button>
            <button type="button" className="7">7</button>
            <button type="button" className="8">8</button>
            <button type="button" className="9">9</button>
          </div>
          <div id="operators">
            <button type="button">/</button>
            <button type="button">x</button>
            <button type="button">-</button>
            <button type="button">+</button>
            <button type="button">=</button>
          </div>
        </div>
      </div>
    )
    //  <button type="button" className="close" aria-label="close"><span aria-hidden="true">&times;</span></button>
  }
}

export const SecondApp = () => {
  return <h1>TEST</h1>
};
//
// Greeting.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }
