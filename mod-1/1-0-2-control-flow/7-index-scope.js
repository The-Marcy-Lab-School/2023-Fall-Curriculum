const getBioBroken = (age, first, last) => {
  if (age < 18) {
    const dynamicBio = `${first} ${last} is only ${age} years old. Still a child!`;
    console.log(dynamicBio);
  } else if (age < 50) {
    const dynamicBio = `${first} ${last} is ${age} years old. Still young at heart!`;
    console.log(dynamicBio);
  } else {
    const dynamicBio = `Wow, ${first} ${last} is already ${age} years old. Getting up there!`;
    console.log(dynamicBio);
  }
  // const finalBio = `Here's their bio: ${dynamicBio}. Click the profile for more info.`;
  // return finalBio;
};

const getBioBetter = (age, first, last) => {
  let dynamicBio;
  if (age < 18) {
    dynamicBio = `${first} ${last} is only ${age} years old. Still a child!`;
  } else if (age < 50) {
    dynamicBio = `${first} ${last} is ${age} years old. Still young at heart!`;
  } else {
    dynamicBio = `Wow, ${first} ${last} is already ${age} years old. Getting up there!`;
  }
  console.log(dynamicBio);
  const finalBio = `Here's their bio: ${dynamicBio}. Click the profile for more info.`;
  return finalBio;
};

const getBioBest = (age, first, last) => {
  let dynamicBio = `Wow, ${first} ${last} is already ${age} years old. Getting up there!`;
  if (age < 18) {
    dynamicBio = `${first} ${last} is only ${age} years old. Still a child!`;
  } else if (age < 50) {
    dynamicBio = `${first} ${last} is ${age} years old. Still young at heart!`;
  }
  console.log(dynamicBio);
  const finalBio = `Here's their bio: ${dynamicBio}. Click the profile for more info.`;
  console.log(finalBio);
};
