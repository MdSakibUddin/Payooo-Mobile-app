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
//Reusable code for toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

//Reusable code for toggle buttons
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btns of formBtns) {
    btns.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btns.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
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
  handleToggle("add-money-parent");
  handleButtonToggle("add-money-btn");
});

document.getElementById("btn-cash-out").addEventListener("click", function () {
  handleToggle("cash-out-parent");
  handleButtonToggle("btn-cash-out");
});

document
  .getElementById("btn-transfer-money")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");
    handleButtonToggle("btn-transfer-money");
  });

document.getElementById("btn-get-bonus").addEventListener("click", function () {
  handleToggle("get-bonus-parent");
  handleButtonToggle("btn-get-bonus");
});
