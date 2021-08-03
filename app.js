const purchasePrice = document.querySelector("#purchase-price");
const quantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const form = document.querySelector("#form");
const outputDiv = document.querySelector("#output");
const body = document.querySelector("#body");

outputDiv.style.display = "none";

function calculateProfit(purchase, quantity, current) {
  let profit = ((current - purchase) * quantity).toFixed(2);
  let profitPercentage = Math.trunc(((current - purchase) * 100) / purchase);
  outputDiv.innerText = `You gained ${profitPercentage}%. Your total profit is ₹${profit}  🎉`;
  outputDiv.style.display = "block";
}

function calculateLoss(purchase, quantity, current) {
  let loss = ((purchase - current) * quantity).toFixed(2);
  let lossPercentage = Math.trunc(((purchase - current) * 100) / purchase);
  outputDiv.innerText = `You lost ${lossPercentage}%. Your total loss is ₹${loss}  😦`;
  outputDiv.style.display = "block";

  if (lossPercentage > 50) {
    body.classList.add("sad");
  }
}

function checkHandler(e) {
  e.preventDefault();
  let purchasePriceInput = purchasePrice.value;
  let quantityInput = quantity.value;
  let currentPriceInput = currentPrice.value;

  if (purchasePriceInput > 0 && quantityInput > 0 && currentPriceInput > 0) {
    if (purchasePriceInput < currentPriceInput) {
      calculateProfit(purchasePriceInput, quantityInput, currentPriceInput);
    } else {
      calculateLoss(purchasePriceInput, quantityInput, currentPriceInput);
    }
  } else {
    console.log("Values must be greater than 0.");
  }
}

form.addEventListener("submit", checkHandler);
