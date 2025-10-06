function StockList({ updateSelectedStock }) {
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => updateSelectedStock("APPL")}>AAPL</button>
        </li>
        <li>
          <button onClick={() => updateSelectedStock("GOOGL")}>GOOGL</button>
        </li>
        <li>
          <button onClick={() => updateSelectedStock("TSLA")}>TSLA</button>
        </li>
        <li>
          <button onClick={() => updateSelectedStock("MSFT")}>MSFT</button>
        </li>
      </ul>
    </div>
  );
}

export default StockList;
