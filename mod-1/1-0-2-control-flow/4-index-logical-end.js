const election = (age, isElectionDay, isUndecided) => {
  if (age < 21 || !isElectionDay) {
    console.log("Can't vote today!");
  } else if (age >= 21 && isUndecided) {
    console.log("Here's some voter info young one");
  } else if (age >= 50 && !isUndecided) {
    console.log('Ok Boomer, you seem sure, but please think of future generations');
  } else {
    console.log('Thank you for your vote.');
  }
};
