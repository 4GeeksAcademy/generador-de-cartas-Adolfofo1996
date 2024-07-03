/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let suits = ["♥", "♣", "♦", "♠"];
let numbers = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let topSuit = document.querySelector("#card-top-suit");
let number = document.querySelector("#card-number");
let bottomSuit = document.querySelector("#card-bottom-suit");
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  newCard();
};

const newCard = () => {
  topSuit.innerHTML = suits[Math.floor(Math.random() * suits.length)];
  number.innerHTML = numbers[Math.floor(Math.random() * numbers.length)];
  bottomSuit.innerHTML = topSuit.innerHTML;
};
