import React, { useState, useEffect } from "react";

function ProfilePage() {
  const [ownStocksPrices, setownStocksPrices] = useState([]);
  const [currentStockPrices, setCurrentStockPrices] = useState([]);
  const [profitLossData, setProfitLossData] = useState([]);
  // const [purchaseAmountsArray, setPurchaseAmountsArray] = useState([]);
  // const [currentStockAmountArray, setCurrentStockAmountArray] = useState([]);

  /**
   * Sample data
   * Group of stocks that I hold, the number of shares and per each share price when I bought it
   */
  const stocks = [
    { symbol: "AAPL", stockQty: 10, buyPrice: 500 },
    { symbol: "GOOGL", stockQty: 20, buyPrice: 250 },
    { symbol: "TSLA", stockQty: 15, buyPrice: 200 },
  ];

  /**
   * Sample data
   * Group of stocks that I hold, the number of shares and their current price per each share
   */
  const currentStocks = [
    { symbol: "AAPL", stockQty: 10, buyPrice: 250 },
    { symbol: "GOOGL", stockQty: 20, buyPrice: 200 },
    { symbol: "TSLA", stockQty: 15, buyPrice: 250 },
  ];

  /**
   *  Setting the prices of the already own stocks
   *  And setting the prices of the current stocks on the basis of recent data
   */
  useEffect(() => {
    setownStocksPrices(stocks);
    setCurrentStockPrices(currentStocks);
  }, []);

  useEffect(() => {
    const calculateProfitLoss = profitLoss(ownStocksPrices, currentStockPrices);
    setProfitLossData(calculateProfitLoss);
  }, [ownStocksPrices, currentStockPrices]);

  /**
   * Function to calucate the individual total price of the stocks
   * And also calculate the total amount of all the stocks we owned
   */
  function currentValue(stockList) {
    if (!stockList || !Array.isArray(stockList)) {
      console.log("StockList is empty");
      return { totalValueOfStocks: 0, currentValueOfStock: [] };
    }

    let totalValueOfStocks = 0;
    let currentValueOfStock = [];

    stockList.forEach((stock) => {
      const totalIndividualValue = stock.stockQty * stock.buyPrice;

      currentValueOfStock.push({
        symbol: stock.symbol,
        totalIndividualValue,
      });

      totalValueOfStocks += totalIndividualValue;
    });

    console.log("Total Amount of Shares, I owned: ", totalValueOfStocks);
    return { totalValueOfStocks, currentValueOfStock };
  }

  function profitLoss(purchaseStockList, currentStockList) {
    let profitLossAmount = 0;
    let profitLossArray = [];

    purchaseStockList.forEach((ps) => {
      const match = currentStockList.find((cs) => {
        return cs.symbol === ps.symbol;
      });

      if (match) {
        const purchaseAmount = ps.stockQty * ps.buyPrice;
        console.log("Purchase Amount: ", purchaseAmount);
        const currentAmount = match.stockQty * match.buyPrice;
        console.log("Current Amount: ", currentAmount);
        profitLossAmount = currentAmount - purchaseAmount;
        console.log("Profit Loss Amount: ", profitLossAmount);

        profitLossArray.push({ symbol: ps.symbol, profitLossAmount });
      }
    });
    console.log("Profit Loss Array: ", profitLossArray);
    return profitLossArray;
  }

  return (
    <>
      <h1>Profile Page</h1>
      <div>Total: {currentValue(ownStocksPrices).totalValueOfStocks}</div>
      <div>
        <table border="5">
          <thead>
            <tr>
              <th>Stocks</th>
              <th>Amount</th>
              <th>Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            {currentValue(ownStocksPrices).currentValueOfStock.map((stock) => {
              const pl = profitLossData.find((p) => p.symbol === stock.symbol);
              return (
                <tr key={stock.symbol}>
                  <td>{stock.symbol}</td>
                  <td>{stock.totalIndividualValue}</td>
                  <td>{pl ? pl.profitLossAmount : "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProfilePage;
