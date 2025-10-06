import { useState, useEffect } from "react";
import axios from "axios";

function StockTable() {
  const [stockData, setstockData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const stockList = ["AAPL", "GOOGL", "TSLA"];
        const stockRequests = stockList.map((stock) =>
          axios.get(
            `https://finnhub.io/api/v1/quote?symbol=${stock}&token=d3148lhr01qnu2r0fa4gd3148lhr01qnu2r0fa50`
          )
        );
        const responses = await Promise.all(stockRequests);
        const result = stockList.map((symbol, index) => ({
          symbol,
          data: responses[index].data,
        }));
        setstockData(result);
        console.log("Result: ", result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <>
      <div>
        <div>
          <table className="stock-table">
            <thead>
              <tr>
                <th>Symbols</th>
                <th>Prices</th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((stock) => (
                <tr key={stock.symbol}>
                  <td>{stock.symbol}</td>
                  <td>{stock.data.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StockTable;
