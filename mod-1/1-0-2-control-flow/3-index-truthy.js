const checkTruthy = (val) => {
  if (val) {
    console.log('Truthy!', val);
  } else {
    console.log('Falsy!', val);
  }
};

checkTruthy(0);
checkTruthy(1);
checkTruthy(-1);
checkTruthy(NaN);
checkTruthy('');
checkTruthy('hi');
checkTruthy(null);
checkTruthy(undefined);
checkTruthy([]);
checkTruthy({});

// can also use !! to check truthiness
console.log(!!0); // false;
console.log(!!1); // true;
