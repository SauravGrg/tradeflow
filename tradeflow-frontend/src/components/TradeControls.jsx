import React, { useState } from "react";

function TradeControls() {
  const [userInputQty, setuserInputQty] = useState("");
  const [userInputPrice, setuserInputPrice] = useState("");
  const [initialBalance, setInitialBalance] = useState(100000);

  const handleChangeAmount = (event) => {
    setuserInputPrice(Number(event.target.value));
  };

  const handleChangeQty = (event) => {
    setuserInputQty(Number(event.target.value));
  };

  const buy = () => {
    const buyQty = userInputQty;
    const buyPrice = userInputPrice * userInputQty;
    const afterPurchasePrice = initialBalance - buyPrice;

    setInitialBalance(afterPurchasePrice);

    console.log("Purchased Stocks: ", buyQty);
    console.log("Per each stock: $", userInputPrice);
    console.log("Total amount: $", buyPrice);
  };

  const sell = () => {
    const sellQty = userInputQty;
    const sellPrice = userInputPrice * userInputQty;
    const afterSellPrice = initialBalance + sellPrice;

    setInitialBalance(afterSellPrice);

    console.log("Sold Stocks:", sellQty);
    console.log("Per each stock: $", userInputPrice);
    console.log("Total amount: $", sellPrice);
  };

  return (
    <>
      <h1>${initialBalance}</h1>
      <button onClick={buy}>Buy</button>
      <button onClick={sell}>Sell</button>
      <div>
        Amount
        <input
          type="number"
          placeholder="0.00"
          value={userInputPrice}
          onChange={handleChangeAmount}
        ></input>
      </div>
      <div>
        Quantity
        <input
          type="number"
          placeholder="0.00"
          value={userInputQty}
          onChange={handleChangeQty}
        ></input>
      </div>
    </>
  );
}

export default TradeControls;
