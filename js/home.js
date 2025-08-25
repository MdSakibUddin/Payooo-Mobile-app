//Reusable Code for parseINt
function getInputValueNumber(id) {
  const inputAmount = parseInt(document.getElementById(id).value);
  return inputAmount;
}

//Reusable code for getting value

function getValue(id) {
  const input = document.getElementById(id).value;
  return input;
}
// Reusable code for innerText
function getInnerText(id) {
  const innerText = parseInt(document.getElementById(id).innerText);
  return innerText;
}
//Add money feature

let validPin = 2552;

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bank = getValue("bank");
    const accountNumber = getValue("account-number");
    const amount = getInputValueNumber("add-amount");
    const pin = getInputValueNumber("add-pin");
    //Checking account number is correct or not
    if (accountNumber.length < 11) {
      alert("Please provide a valid 11 digit account number");
      return;
    }
    if (pin !== validPin) {
      alert("Please provide valid pin");
      return;
    }
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    const totalNewAvailableBalance = availableBalance + amount;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });

//Cashout Money Feature

document
  .getElementById("btn-withdraw")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const agentNumber = getValue("agent-number");
    const cashoutAmount = getValue("cashout-amount");
    const cashoutPin = getValue("cashout-pin");
    const availableBalance = getInnerText("available-balance");
    const totalNewAvailableBalance = availableBalance - cashoutAmount;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });

//Toggling Feature
document.getElementById("add-money-btn").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("btn-cash-out").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "block";
});
