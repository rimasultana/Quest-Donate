// card-1
document.getElementById("cardOne").addEventListener("click", function () {
  const oneInputAddMoney = getInnerText("oneInputAddMoney");
  const oneInputAmount = getInputValue("oneInputAmount");
  const amount = getInnerText("amount");

  const input = document.getElementById('oneInputAmount').value;
  const regex = /^[0-9]+$/;
  if (!regex.test(input)) {
    return alert("Please enter a valid numeric donation amount.");
  }

  if (
    !isNaN(oneInputAddMoney) &&
    !isNaN(oneInputAmount) &&
    oneInputAmount > 0
  ) {
    if (oneInputAmount > amount) {
      return alert("You don't have enough money 🤷‍♀️");
    }

    const sum = oneInputAddMoney + oneInputAmount;
    document.getElementById("oneInputAddMoney").innerText = sum;

    const cartAmount = amount - oneInputAmount;
    document.getElementById("amount").innerText = cartAmount;

    const title = document.getElementById("cardOneTitle").innerText;
    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="border border-gray-300 px-4 rounded-md space-y-4 m-5 p-5">
    <h1 class="text-3xl">${oneInputAmount} ${title}</h1>
    <h1 class="text-2xl">Data:${new Date()}</h1>
  </div>
    
    `;
    historyContainer.appendChild(div);

    Swal.fire({
      title: "<strong>Congrats!</strong>",
      icon: "success",
      text: "You have donate for Humankind",
    });
  } else {
    alert("Invalid Money 🤦‍♀️ Please Try Again 🫡");
  }
});

// card-2
document.getElementById("cardTwo").addEventListener("click", function () {
  const TwoInputAddMoney = getInnerText("TwoInputAddMoney");
  const TwoInputAmount = getInputValue("TwoInputAmount");
  const amount = getInnerText("amount");
 
  const input = document.getElementById('TwoInputAmount').value;
  const regex = /^[0-9]+$/;
  if (!regex.test(input)) {
    return alert("Please enter a valid numeric donation amount.");
  }

  if (
    TwoInputAmount > 0
  ) {
    if (TwoInputAmount > amount) {
      return alert("You don't have enough money 🤷‍♀️");
    }

    const sum = TwoInputAddMoney + TwoInputAmount;
    document.getElementById("TwoInputAddMoney").innerText = sum;

    const cartAmount = amount - TwoInputAmount;
    document.getElementById("amount").innerText = cartAmount;

    const title = document.getElementById("TwoCardTitle").innerText;
    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="border border-gray-300 px-4 rounded-md space-y-4 m-5 p-5">
    <h1 class="text-3xl">${TwoInputAmount} ${title}</h1>
    <h1 class="text-2xl">Data:${new Date()}</h1>
  </div>
    
    `;
    historyContainer.appendChild(div);

    Swal.fire({
      title: "<strong>Congrats!</strong>",
      icon: "success",
      text: "You have donate for Humankind",
    });
  } else {
    alert("Invalid Money 🤦‍♀️ Please Try Again 🫡");
  }
});
// card-2 End
// ! card-3 Stat

document.getElementById("cardThree").addEventListener("click", function () {
  const ThreeInputAddMoney = getInnerText("ThreeInputAddMoney");
  const ThreeInputAmount = getInputValue("ThreeInputAmount");
  const amount = getInnerText("amount");


  const input = document.getElementById('ThreeInputAmount').value;
  const regex = /^[0-9]+$/;
  if (!regex.test(input)) {
    return alert("Please enter a valid numeric donation amount.");
  }

  if (
    !isNaN(ThreeInputAddMoney) &&
    !isNaN(ThreeInputAmount) &&
    ThreeInputAmount > 0
  ) {
    if (ThreeInputAmount > amount) {
      return alert("You don't have enough money 🤷‍♀️");
    }

    const sum = ThreeInputAddMoney + ThreeInputAmount;
    document.getElementById("ThreeInputAddMoney").innerText = sum;

    const cartAmount = amount - ThreeInputAmount;
    document.getElementById("amount").innerText = cartAmount;

    const title = document.getElementById("threeCardTitle").innerText;
    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="border border-gray-300 px-4 rounded-md space-y-4 m-5 p-5">
    <h1 class="text-3xl">${ThreeInputAmount} ${title}</h1>
    <h1 class="text-2xl">Data:${new Date()}</h1>
  </div>
    
    `;
    historyContainer.appendChild(div);

    Swal.fire({
      title: "<strong>Congrats!</strong>",
      icon: "success",
      text: "You have donate for Humankind",
    });
  } else {
    alert("Invalid Money 🤦‍♀️ Please Try Again 🫡");
  }
});

// History

const btnHistory = document.getElementById("btn-history");
const btnDonation = document.getElementById("btn-donation");

btnHistory.addEventListener("click", function () {
  btnHistory.classList.add("bg-primary");
  btnDonation.classList.remove("bg-primary");
  document.getElementById("card-section").classList.add("hidden");
  document.getElementById("history-container").classList.remove("hidden");
});
btnDonation.addEventListener("click", function () {
  btnDonation.classList.add("bg-primary");
  btnHistory.classList.remove("bg-primary");
  document.getElementById("card-section").classList.remove("hidden");
  document.getElementById("history-container").classList.add("hidden");
});

// Helper functions
function getInputValue(id) {
  const value = parseFloat(document.getElementById(id).value);
  return value;
}

function getInnerText(id) {
  const innerText = parseFloat(document.getElementById(id).innerText);
  return innerText;
}
