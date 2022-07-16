const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
	
  return a.reduce((total, b) => total + b, 0);

};

const multiply = function(a) {
  
  return a.reduce((total, b) => total * b , 1);

};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
    const zahlenSpeicher = [];
    let zahl = 0;
    for (let i = 0; i < a; i++){
      zahl = zahl + 1;
      zahlenSpeicher.push(zahl);

    }
    return zahlenSpeicher.reduce((total,b) => total * b,1);


};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
