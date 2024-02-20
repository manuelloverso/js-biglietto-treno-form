// Variables Declaration
let price;
const pricePerKm = 0.21;

document.getElementById("submit").addEventListener("click", function () {
  const userName = document.getElementById("name").value;
  const km = document.getElementById("km").value;
  let age = document.getElementById("age").value;

  console.log(userName);
  console.log(km);
  console.log(age);

  price = km * pricePerKm;
  console.log(price);

  if (age == "senior") {
    price = price - price * 0.4;
    console.log(price);
  } else if (age == "minor") {
    price = price - price * 0.2;
    console.log(price);
  }
});
