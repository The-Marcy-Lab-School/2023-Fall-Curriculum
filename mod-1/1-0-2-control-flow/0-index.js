const happyBirthday = (age) => {
  if (age === 25) {
    return 'Happy birthday, you can rent a car!';
  } if (age < 25) {
    return 'No rental cars on your b-day yet.';
  } if (age < 90) {
    return 'Enjoy car rentals on your b-day!';
  }
  return 'You should probably not be driving.';
};
