// ES6 spread syntax for arrays
const fruits = ["apple", "banana", "orange"];
const vegetables = ["cucumber", "radish"];

console.log([...fruits, ...vegetables]);

// dynamic object keys
const favoriteFood = "ice cream";

const goodFoods = {
  // favoriteFood: true
  [favoriteFood]: true,
};

console.log(goodFoods);

// javascript objects, properties, and methods
const developer = {
  salary: 240000,
  experience: 5,
  techStack: ["vue", "html", "css"],
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2;
    this.lookingForWork = false;
  },
};

console.log("developer salary: ", developer.salary);
console.log("developer looking for work: ", developer.lookingForWork);

developer.doubleSalary();

console.log("developer new salary: ", developer.salary);
console.log("developer looking for work?: ", developer.lookingForWork);

// async and await
// import axios from "axios";

// const url = "http://localhost:3000/jobs";

// const fetchJobsV1 = () => {
//   axios.get(url).then((response) => {
//     console.log(response.data);
//   });
// };

// const fetchJobsV2 = async () => {
//   const response = await axios.get(url);
//   console.log(response.data);
// };

// fetchJobsV1()
// fetchJobsV2();

// setTimeout, setInterval, and clearInterval
const interval = setInterval(() => {
  console.log("i will print every 2 seconds");
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);

// slice method
const sushi = ["tuna", "salmon", "yellowtail", "eel", "shrimp", "octopus", "uni"];

console.log(sushi.slice());
console.log(sushi.slice(3));
console.log(sushi.slice(2, 4));
console.log(sushi.slice(3, 6));
