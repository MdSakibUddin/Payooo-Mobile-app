// Login Button Functionality
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    //event parameter pass korar karon hcche jeno page automatic reload na ney form tag er jnno.
    event.preventDefault();
    const mobileNumber = 61404091228;
    const pin = 2552;

    //this is for Mobile Number check
    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    // this is for pin check
    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    if (
      mobileNumberValueConverted === mobileNumber &&
      pinNumberValueConverted === pin
    ) {
      window.location.href = "./home.html";
    } else {
      alert("Invalid Credential");
    }
  });
