// Variables
const currency1 = document.querySelector("#currencyOne");
const currency2 = document.querySelector("#currencyTwo");
const input1 = document.querySelector("#currencyOneInput");
const input2 = document.querySelector("#currencyTwoInput");
const wich_currency = document.querySelector(".wichCurrency");
const equal_currency = document.querySelector(".equalCurrency");

// Functions
const init = () => {
  // Event Listeners
  currency1.addEventListener("change", getData);
  input1.addEventListener("input", getData);
  currency2.addEventListener("change", getData);
  input2.addEventListener("input", getData);
  writeDate();
  getData();
};

const writeDate = () => {
  const date_time = new Date();
  document.querySelector("#dateTime").innerHTML = date_time;
};

const getData = () => {
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      calculate(data);
    });
};

const calculate = (data) => {
  const money1 = currency1.value;
  const money2 = currency2.value;
  const rate = data.rates[money2] / data.rates[money1];
  wich_currency.innerText = `1 ${money1} equals`;
  equal_currency.innerText = `${rate.toFixed(2)} ${money2}`;
  input2.value = (input1.value * rate).toFixed(2);
};

window.addEventListener("load", init);
