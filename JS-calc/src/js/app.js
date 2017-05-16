import evaluate from './assets/evaluate';
import $ from 'jquery';

let title = $('h1');
let calculator = $('#calculator')

title.hide();
calculator.hide();

$(document).ready(() => {


  evaluate(1,2,"div") == .5 && evaluate(1, 2, "-") == -1 ? $('h1')[0].innerHTML += " - API works!" : $('h1')[0].innerHTML += " - API broken"
  title.fadeIn('slow');

  calculator.show();

});
