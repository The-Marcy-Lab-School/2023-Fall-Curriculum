// basic start
const doAdminThings = (role) => {
  if (role === 'admin') {
    console.log('You can do admin things');
    console.log('You can do more admin things');
    console.log('You can do even more admin things');
  } else {
    console.log('Nothing to do');
  }
};

// basic end
const doAdminThingsBetter = (role) => {
  if (role !== 'admin') return console.log('Nothing to do');
  console.log('You can do admin things');
  console.log('You can do more admin things');
  console.log('You can do even more admin things');
};

// advanced start (if time)
const getMedicalCost = (hasInsurance, surgeryLevel) => {
  if (hasInsurance) {
    if (surgeryLevel === 'major') {
      return 5000;
    } if (surgeryLevel === 'minor') {
      return 3000;
    }
    return 1000;
  }
  return 100000;
};

// advanced end
const getMedicalCostBetter = (hasInsurance, surgeryLevel) => {
  if (!hasInsurance) return 100000;
  if (surgeryLevel === 'major') return 500;
  if (surgeryLevel === 'minor') return 300;
  return 100;
};
