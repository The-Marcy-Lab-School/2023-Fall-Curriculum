// for (let i = 1; i < 11; i++) {
//   if (!(i === 4) && !(i === 7)) {
//     console.log("Sure glad this isn't 4 or 7");
//     console.log(i);
//   }
// }

for (let i = 1; i < 11; i++) {
  if (i === 4 || i === 7) {
    continue;
  }
  console.log("Sure glad this isn't 4 or 7");
  console.log(i);
}

