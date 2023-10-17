// I lived with my partner in New Orleans
let myZipCode = '70119';
let partnerZipCode = myZipCode;

// But then I moved
myZipCode = '11238';

// Did partnerZipCode also change?
console.log("myZipCode:", myZipCode);
console.log("partnerZipCode:", partnerZipCode);

/* 
"passed by value" means that raw values are copied.
Variables can hold identical values but reassignments to one
variable don't affect the other.

All primitives are passed by value (strings, numbers, booleans, null, undefined)

This is like "forking" a repo. Changes to the fork don't affect the original.
*/



// My partner and I share our kitchen supplies
let myKitchenSupplies = ['pot', 'pan', 'rice cooker'];
let partnerKitchenSupplies = myKitchenSupplies;

/* 
Arrays are copied by "reference". 
Copying an Array from one variable to another copies the 
"reference" to the Array, not the raw values in the Array
This is like giving the other variable editing rights to the same data. 
Changes made to one variable's reference affect the other variable's
reference, because they reference the same thing!
*/
partnerKitchenSupplies.push('spatula');
console.log(myKitchenSupplies);

myKitchenSupplies = []
console.log(partnerKitchenSupplies);
