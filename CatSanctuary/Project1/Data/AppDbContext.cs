using Microsoft.EntityFrameworkCore;
using Project1.Models;

namespace Project1.Data;

public class AppDbContext : DbContext
{
    public DbSet<Animal> Animals { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connectionString = "server=127.0.0.1;user=root;password=12345;database=cat_sanctuary";
        var serverVersion = new MySqlServerVersion(new Version(8, 0, 36));
        optionsBuilder.UseMySql(connectionString, serverVersion);
    }
}