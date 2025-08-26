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

//Transaction work

const transactionData = [];

//Add money feature

let validPin = 2552;

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bank = getValue("bank");
    const accountNumber = getValue("account-number");
    const amount = getInputValueNumber("add-amount");

    if (amount <= 0) {
      alert("Invalid amount");
      return;
    }

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

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
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

    if (amount <= 0 || amount > availableBalance) {
      alert("invalid amount");
      return;
    }
    const totalNewAvailableBalance = availableBalance - cashoutAmount;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;

    const data = {
      name: "cash out",
      date: new Date().toLocalTimeString(),
    };

    transactionData.push(data);
  });

document
  .getElementById("btn-transaction")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    transactionContainer.innerText = "";
    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `<div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
                    <div class="flex items-center">
                        <div class=" p-3 rounded-full bg-[#f4f5f7]">
                            <img class="mx-auto" src="./assets/wallet1.png" alt="">
                        </div>
                        <div class="ml-5">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>`;

      transactionContainer.appendChild(div);
    }
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

document.getElementById("btn-pay-bill").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
  handleButtonToggle("btn-pay-bill");
});

document
  .getElementById("btn-transaction")
  .addEventListener("click", function () {
    handleToggle("transaction-parent");
    handleButtonToggle("btn-transaction");
  });
