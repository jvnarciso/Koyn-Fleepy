let countHeads = 0;
let countTails = 0;
let historyCount = 0;

function flipMe() {
  const headsOrTails = Math.floor(Math.random() * 2);
  const result = document.querySelector("h1");
  const outcome = document.createElement("p");
  const historyResult = document.createElement("p");
  const coinBitch = document.createAttribute("src");
  const bitchCoin = document.querySelector("#bitchCoin");
  historyCount++;

  if (headsOrTails === 1) {
    countHeads++;
    coinBitch.value = "http://i.imgur.com/AjOA0xv.png";
    bitchCoin.setAttributeNode(coinBitch);
    result.innerText = "Heads";
    historyResult.innerText = "Heads";
    const span = document.querySelector("#heads-percentage");
    const percentage = (countHeads / (countHeads + countTails)) * 100;
    span.innerText = percentage.toFixed(2);
  } else {
    countTails++;
    coinBitch.value =
      "https://assets.coingecko.com/coins/images/8758/large/ShitCoin.png?1561601773";
    bitchCoin.setAttributeNode(coinBitch);
    result.innerText = "Tails";
    historyResult.innerText = "Tails";
    const span = document.querySelector("#tails-percentage");
    const percentage = (countTails / (countHeads + countTails)) * 100;
    span.innerText = percentage.toFixed(2);
  }
  div1.appendChild(outcome);
  const div2 = document.querySelector("#div2");

  addHistory(div2, historyResult);
}

function addHistory(div, historyResult) {
  if (historyCount > 10) {
    div.removeChild(div.childNodes[9]);
  }
  div.insertBefore(historyResult, div.childNodes[0]);
}
