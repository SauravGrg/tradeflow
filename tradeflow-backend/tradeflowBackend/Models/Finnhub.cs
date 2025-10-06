namespace tradeflowBackend.Models
{
    public class Finnhub
    {
        public decimal currentPrice { get; set; }
        public decimal high { get; set; }
        public decimal low { get; set; }
        public decimal open { get; set; }
        public decimal previousClose { get; set; }
        public DateTime timeStamp { get; set; }
    }
}
