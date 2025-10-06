using Microsoft.AspNetCore.Mvc;
using tradeflowBackend.Models;
using tradeflowBackend.Services;

namespace tradeflowBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StocksController : ControllerBase
    {
        private readonly StockService _stockService;

        public StocksController(StockService stockService)
        {
            _stockService = stockService;
        }

        [HttpGet]
        public async Task<IActionResult> GetStockInfo(string symbol)
        {
            var stock = await _stockService.GetAllStockInfo(symbol);
            return Ok(stock);
        }

        [HttpGet("{symbol}")]
        public async Task<IActionResult> GetStock(string symbol)
        {
            var fullData = await _stockService.GetAllStockInfo(symbol);
            var partialData = await _stockService.GetPartialInfo(symbol, fullData);
            return Ok(partialData);

        }

        [HttpGet("default")]
        public async Task<IActionResult> GetAllStocks()
        {
            var stocks = await _stockService.GetDefaultStocks();
            return Ok(stocks);
        }
    }
}
