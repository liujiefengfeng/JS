console.log('start');
const VARIABLE="the value";
const ARGS = process.argv;
console.log(ARGS + "END");
console.log(ARGS[2])

const testfunc = function () {
  return function() {return console.log('annomous')}
}();
