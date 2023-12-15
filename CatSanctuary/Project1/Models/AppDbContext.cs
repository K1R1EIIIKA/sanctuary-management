using Microsoft.EntityFrameworkCore;
using Project1.Models.Animals;
using Project1.Models.People;
using Project1.Models.Structure;
using Project1.Models.Templates;

namespace Project1.Models;

public class AppDbContext : DbContext
{
    public DbSet<Animal> Animals { get; set; }
    public DbSet<Cat> Cats { get; set; }
    public DbSet<Kiwi> Kiwis { get; set; }
    public DbSet<Shark> Sharks { get; set; }
    public DbSet<Capybara> Capybaras { get; set; }
    
    public DbSet<Employee> Employees { get; set; }
    public DbSet<Customer> Customers { get; set; }
    
    public DbSet<Sanctuary> Sanctuaries { get; set; }
    public DbSet<Event> Events { get; set; }
    
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
        Database.EnsureCreated();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connectionString = "server=127.0.0.1;user=root;password=12345;database=cat_sanctuary";
        var serverVersion = new MySqlServerVersion(new Version(8, 0, 36));
        optionsBuilder.UseMySql(connectionString, serverVersion);
    }
}