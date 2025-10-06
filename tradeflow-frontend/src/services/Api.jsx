import React, { useEffect, useState } from "react";

function Api() {
  const [stocks, setstocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://localhost:7005/api/stocks/default")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data form API: ", data);
        setstocks(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading stocks....</div>;
  }
  return (
    <>
      <div>
        <h2>Stocks from API: </h2>
        <table>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
          </tr>
          {stocks.map((stock) => (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>${stock.c}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default Api;
