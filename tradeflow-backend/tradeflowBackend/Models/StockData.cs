using System.Text.Json.Serialization;

namespace tradeflowBackend.Models
{
    public class StockData
    {
        [JsonPropertyName("c")]
        public decimal CurrentPrice { get; set; }

        [JsonPropertyName("h")]
        public decimal HighPrice { get; set; }

        [JsonPropertyName("l")]
        public decimal LowPrice { get; set; }

        [JsonPropertyName("o")]
        public decimal OpenPrice { get; set; }

        [JsonPropertyName("pc")]
        public decimal PreviousClose { get; set; }

        [JsonPropertyName("t")]
        public long TimeStamp { get; set; }
    }

    public class StockDto
    {
        [JsonPropertyName("c")]
        public decimal CurrentPrice { get; set; }
        public string Symbol { get; set; } = string.Empty;
    }

}
