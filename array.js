const country = 'Bangladesh';
const age = 21;
const isIndependent = true;
const student = {id: 121, class: 13, name: 'agun'};
const friend = [12, 14, 20, 21, 24, 30, 50, 15];
function add(num1, num2){
    return num1 + num2;
} 

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friend)); // array check
console.log(typeof add);

console.log(friend.includes(12));

// concate

const newFriend = [13, 21, 28, 34];
const allFriend = newFriend.concat(friend);
console.log(allFriend);