import evaluate from './assets/evaluate';

evaluate(1,2,"div") == .5 && evaluate(1, 2, "-") == -1 && evaluate(1, 4, "root") == 2 ? console.log('works!') : console.log('error in evaluate.js');
