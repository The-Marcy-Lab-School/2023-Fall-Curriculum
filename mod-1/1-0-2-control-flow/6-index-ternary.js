const getCoolness = (likesPets) => {
  if (likesPets) {
    return 'cool';
  }
  return 'not cool';
};
// (condition) ? (if true) : (else);
const getCoolnessBetter = (likesPets) => (likesPets ? 'cool' : 'not cool');

const getCoolnessTiny = (likesPets) => (likesPets ? 'cool' : 'not cool');
