let validPin = 2552;

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseFloat(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin").value);
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
