// Variables Declaration
let price;
const pricePerKm = 0.21;
let finalPrice;
let discount = false;

document.getElementById("submit").addEventListener("click", function () {
  const userName = document.getElementById("name").value;
  const km = document.getElementById("km").value;
  let age = document.getElementById("age").value;

  console.log(userName);
  console.log(km);
  console.log(age);

  price = km * pricePerKm;
  console.log(price);

  // Applying Discounts
  if (age == "senior") {
    price = price - price * 0.4;
    discount = true;
  } else if (age == "minor") {
    price = price - price * 0.2;
    discount = true;
  }

  finalPrice = price.toFixed(2) + "€";

  //Output Displaying
  document.getElementById("customer-name").innerHTML = userName;

  // Ticket Type
  if (discount == false) {
    document.getElementById("ticket-type").innerHTML = "Standard Ticket";
  } else {
    document.getElementById("ticket-type").innerHTML = "Discounted Ticket";
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
