using tradeflowBackend.Models;

namespace tradeflowBackend.Mappers
{
    public static class StockMapper
    {
        public static StockDto ToDto(string symbol, StockData data)
        {
            return new StockDto
            {
                Symbol = symbol,
                CurrentPrice = data.CurrentPrice
            };
        }
    }
}
