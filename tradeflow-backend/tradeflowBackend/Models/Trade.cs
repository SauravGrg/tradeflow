using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace tradeflowBackend.Models
{
    public class Trade
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength (50)]
        public string Symbol { set; get; }

        [Range(1, int.MaxValue)]
        public int Quantity { get; set; }

        [Column(TypeName = "decimal(18,4)")]
        public decimal Price { get; set; }

        [Required]
        public DateTime PurchasedAt { get; set; }
        public DateTime? SelledAt { get; set; }
    }
}
