import evaluate from './assets/evaluate';
import $ from 'jquery';
import helloWorld from './assets/react-test.js';

$(document).ready(() => {

  evaluate(1,2,"div") == .5 && evaluate(1, 2, "-") == -1 ? console.log("API works!!") : console.log("API broken");

});
