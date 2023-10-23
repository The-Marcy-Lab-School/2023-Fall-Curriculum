/* Build a better version of this function */
const isOnlyAphaNumericOld = (str) => {
  if (!str.length) return false;
  const alphaNumericOptions = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
  for (let i = 0; i < str.length; i++) {
    if (!alphaNumericOptions.includes(str[i])) {
      return false;
    }
  }
  return true;
};

const isOnlyAphaNumeric = (str) => /^\w+$/.test(str);