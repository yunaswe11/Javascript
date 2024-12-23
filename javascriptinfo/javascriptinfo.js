
// Hello, object

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// console.log(user);


// Check for emptiness

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log(schedule);
alert( isEmpty(schedule) ); // false


//Sum object properties

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key]
}

console.log(sum);



// Multiply numeric property values by 2

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
        obj[key] *= 2;
    }
    }
}

(multiplyNumeric(menu));

console.log(menu);
// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };