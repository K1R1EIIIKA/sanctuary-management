using Microsoft.EntityFrameworkCore;
using Project1.Models;
using Project1.Models.Animals;

namespace Project1.Data;

public class AppDbContext : DbContext
{
    public DbSet<Cat> Cats { get; set; }
    public DbSet<Bird> Birds { get; set; }
    public DbSet<Shark> Sharks { get; set; }
    public DbSet<Capybara> Capybaras { get; set; }
    
    public DbSet<Employee> Employees { get; set; }
    public DbSet<Customer> Customers { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connectionString = "server=127.0.0.1;user=root;password=12345;database=cat_sanctuary";
        var serverVersion = new MySqlServerVersion(new Version(8, 0, 36));
        optionsBuilder.UseMySql(connectionString, serverVersion);
    }
}