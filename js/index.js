// card-1
document.getElementById("cardOne").addEventListener("click", function () {
  const oneInputAddMoney = getInnerText("oneInputAddMoney");
  const oneInputAmount = getInputValue("oneInputAmount");
  const amount = getInnerText("amount");

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

    Swal.fire({
      title: "<strong>Congrats!</strong>",
      icon: "success",
      text: "You have donate for Humankind",
    });
  } else {
    alert("Invalid Money 🤦‍♀️ Please Try Again 🫡");
  }

  // history
  const historyItem = document.createElement("div");
  historyItem.classList.add(
    "p-5",
    "w-4/5",
    "mx-auto",
    "border-2",
    "border-primary"
  );
  historyItem.innerHTML = `
  <p class= "text-3xl font-bold">${sum} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
  <p>Date: ${new Date()}</p>
  `;
  const historyContainer = document.getElementById("history-container");
  historyContainer.appendChild(historyItem);
});

// card-2
document.getElementById("cardTwo").addEventListener("click", function () {
  const TwoInputAddMoney = getInnerText("TwoInputAddMoney");
  const TwoInputAmount = getInputValue("TwoInputAmount");
  const amount = getInnerText("amount");

  if (
    !isNaN(TwoInputAddMoney) &&
    !isNaN(TwoInputAmount) &&
    TwoInputAmount > 0
  ) {
    if (TwoInputAmount > amount) {
      return alert("You don't have enough money 🤷‍♀️");
    }

    const sum = TwoInputAddMoney + TwoInputAmount;
    document.getElementById("oneInputAddMoney").innerText = sum;

    const cartAmount = amount - TwoInputAmount;
    document.getElementById("amount").innerText = cartAmount;

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

  if (
    !isNaN(ThreeInputAddMoney) &&
    !isNaN(ThreeInputAmount) &&
    ThreeInputAmount > 0
  ) {
    if (ThreeInputAmount > amount) {
      return alert("You don't have enough money 🤷‍♀️");
    }

    const sum = ThreeInputAddMoney + ThreeInputAmount;
    document.getElementById("oneInputAddMoney").innerText = sum;

    const cartAmount = amount - ThreeInputAmount;
    document.getElementById("amount").innerText = cartAmount;
    const title = document.getElementById("cardOneTitle").innerText;
    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="border border-gray-300 px-4 rounded-md">
    <h1 class="text-3xl">100 Donate for Flood at Noakhali, Bangladesh</h1>
    <h1 class="text-2xl">Data: bla bla bla</h1>
  </div>;
    
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

document.getElementById("btn-history").addEventListener("click", function () {
  btnHistory.classList.add("bg-primary");
  btnDonation.classList.remove("bg-primary");
  document.getElementById("card").classList.add("hidden");
});
btnDonation.addEventListener("click", function () {
  btnHistory.classList.add("hidden");
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
