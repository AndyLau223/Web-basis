let age = 32;
let userName = "Andy";
let hobbies = ["Sprots", "Cooking", "Reading"];
// a object
let job = {
  title: "Software Engineer",
  place: "Berlin",
  salary: 50000,
};

age = 45;

// function
// passing data into functions with parameters
function calculateAdultYears(userAge) {
  return userAge - 18;
}
alert(calculateAdultYears(18));
