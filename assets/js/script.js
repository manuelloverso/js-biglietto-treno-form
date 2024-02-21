// Variables Declaration
let price;
const pricePerKm = 0.21;
let finalPrice;

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const userName = document.getElementById("name").value;
  const km = document.getElementById("km").value;
  let age = document.getElementById("age").value;

  document.getElementById("generated-ticket").className = "ticket";

  console.log(userName);
  console.log(km);
  console.log(age);

  price = km * pricePerKm;
  console.log(price);

  // Applying Discounts
  if (age == "senior") {
    price = price - price * 0.4;
  } else if (age == "minor") {
    price = price - price * 0.2;
  }

  finalPrice = price.toFixed(2) + "€";

  //Output Displaying
  document.getElementById("customer-name").innerHTML = userName;

  // Ticket Type
  if (age == "senior" || age == "minor") {
    document.getElementById("ticket-type").innerHTML = "Discounted Ticket";
  } else if (age == "adult") {
    document.getElementById("ticket-type").innerHTML = "Standard Ticket";
  }

  //Carriage Number
  let carriage = Math.floor(Math.random() * 20);
  document.getElementById("carriage-number").innerHTML = carriage;

  //Ticket Code
  let ticketCode = Math.floor(Math.random() * 50000);
  document.getElementById("ticket-code").innerHTML = ticketCode;

  //Ticket Price
  document.getElementById("final-price").innerHTML = finalPrice;
});
