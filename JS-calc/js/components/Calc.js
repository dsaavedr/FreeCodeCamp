import React from 'react';
import $ from 'jquery';

import Screen from './Screen';
import Btn from './Button';

var vals={
  currentN : [0],
  firstN : [0],
  secondN : [],
  op : []
};

export default class Calc extends React.Component {
  updateScreen() {
    $("#screen")[0].innerHTML = "<p class='text-right'>" + parseFloat(vals.currentN.join("")) + "</p>";
    console.log(vals.currentN);
    $("#screen")[0].innerHTML += "<p class='text-right'>" + parseFloat(vals.firstN.join("")) + vals.op + vals.secondN.join("") + "</p>";
    console.log($("#screen"));
  }

  useVal () {
    var num1 = vals.currentN;
    var num2 = vals.secondN;
    var num3 = vals.firstN;
    var op = vals.op;

    this.props.type == 'number' ? (
      console.log('y')
    ) : (
      this.props.type == 'operator' ? (
        console.log('y')
      ) : (
        this.props.type == 'specOperator' ? (
          console.log('y')
        ) : (
          console.log('n')
        )
      )
    )
  }

  render() {
    var par = this;
    var Buttons = [
      {val: "AC", type: 'specOperator'},
      {val: "CE", type: 'specOperator'},
      {val: "÷", type: 'operator'},
      {val: "x", type: 'operator'},
      {val: 7, type: 'number'},
      {val: 8, type: 'number'},
      {val: 9, type: 'number'},
      {val: "-", type: 'operator'},
      {val: 4, type: 'number'},
      {val: 5, type: 'number'},
      {val: 6, type: 'number'},
      {val: "+", type: 'operator'},
      {val: 1, type: 'number'},
      {val: 2, type: 'number'},
      {val: 3, type: 'number'},
      {val: "√", type: 'operator'},
      {val: 0, type: 'number'},
      {val: ".", type: 'number'},
      {val: "=", type: 'equal'}
    ].map((value, i) => <Btn key={i} click={[par.useVal, par.updateScreen.bind(this)]} value={value.val} type={value.type}/>);

    console.log(Buttons);

    return(
      <div class="container">
        <Screen></Screen>
        <div class="row">
        {Buttons}
        </div>
      </div>
    );
  }
}
