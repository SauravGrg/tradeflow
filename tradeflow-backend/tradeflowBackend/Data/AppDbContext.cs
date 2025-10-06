using Microsoft.EntityFrameworkCore;
using tradeflowBackend.Models;

namespace tradeflowBackend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        { 
        }
        public DbSet<Trade> Trades { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
