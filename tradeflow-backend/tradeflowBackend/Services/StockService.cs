using Microsoft.Extensions.Options;
using tradeflowBackend.Mappers;
using tradeflowBackend.Models;

namespace tradeflowBackend.Services
{
    public class StockService
    {
        private readonly HttpClient _httpClient;
        private readonly ApiSetting _apiSetting;
        private readonly StockSetting _stockSetting;

        public StockService(HttpClient httpClient, IOptions<ApiSetting> apiSetting, IOptions<StockSetting> stockSetting)
        {
            _httpClient = httpClient;
            _apiSetting = apiSetting.Value;
            _stockSetting = stockSetting.Value;
        }
        public async Task<StockData?> GetAllStockInfo(string symbol)
        {
            if (string.IsNullOrWhiteSpace(symbol))
            {
                throw new ArgumentNullException("Symbol can't be null or empty");
            }

            var url = $"{_apiSetting.BaseUrl}?symbol={symbol}&token={_apiSetting.ApiKey}";
            var response = await _httpClient.GetAsync(url);

            return await response.Content.ReadFromJsonAsync<StockData>();
        }

        public async Task<StockDto?> GetPartialInfo(string symbol, StockData currentPrice)
        {
            if (string.IsNullOrWhiteSpace(symbol))
            {
                throw new ArgumentNullException("Symbol can't be null or empty");
            }
            return StockMapper.ToDto(symbol, currentPrice);
        }

        public async Task<List<StockDto>> GetDefaultStocks()
        {
            var results = new List<StockDto>();

            foreach (var symbol in _stockSetting.DefaultSymbols)
            {
                var stock = await GetAllStockInfo(symbol);
                if (stock != null)
                {
                    var partial = await GetPartialInfo(symbol, stock);
                    results.Add(partial);
                }
            }
            return results;
        }
    }
}
