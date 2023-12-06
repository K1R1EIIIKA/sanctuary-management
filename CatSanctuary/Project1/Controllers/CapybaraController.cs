using Microsoft.AspNetCore.Mvc;
using Project1.Data;
using Project1.Models.Animals;

namespace Project1.Controllers;

[ApiController]
[Route("[controller]")]
public class CapybaraController
{
    private readonly AppDbContext _context;
    
    private readonly ILogger<CapybaraController> _logger;

    public CapybaraController(ILogger<CapybaraController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Capybara> Get()
    {
        return _context.Capybaras.ToList();
    }
}