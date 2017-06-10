import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import cli from '../assets/evaluate';

export class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return (
      <div id="calculator" className="container">
        <div id="display">0</div>
        <div id="keypad">
          <div id="keys">
            <div id="inputs">
              <div id="functions">
                <button type="button" className="btn key func-AC">AC</button>
                <button type="button" className="btn key func-(-)">( - )</button>
                <button type="button" className="btn key func-%">%</button>
              </div>
              <div id="numbers">
                <button type="button" className="btn key num-0">0</button>
                <button type="button" className="btn key num-.">.</button>
                <button type="button" className="btn key num-1">1</button>
                <button type="button" className="btn key num-2">2</button>
                <button type="button" className="btn key num-3">3</button>
                <button type="button" className="btn key num-4">4</button>
                <button type="button" className="btn key num-5">5</button>
                <button type="button" className="btn key num-6">6</button>
                <button type="button" className="btn key num-7">7</button>
                <button type="button" className="btn key num-8">8</button>
                <button type="button" className="btn key num-9">9</button>
                </div>
            </div>
            <div id="operators">
              <button type="button" className="btn key op-/">/</button>
              <button type="button" className="btn key op-x">x</button>
              <button type="button" className="btn key op--">-</button>
              <button type="button" className="btn key op-+">+</button>
              <button type="button" className="btn key op-=">=</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
//
// Greeting.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }
