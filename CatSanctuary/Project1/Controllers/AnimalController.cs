using Microsoft.AspNetCore.Mvc;
using Project1.Models;
using Project1.Models.Templates;

namespace Project1.Controllers;

[ApiController]
[Route("[controller]")]
public class AnimalController : ControllerBase, IControl<Animal>
{
    private readonly AppDbContext _context;
    private readonly ILogger<AnimalController> _logger;

    public AnimalController(ILogger<AnimalController> logger, AppDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet]
    public IEnumerable<Animal> Get()
    {
        return _context.Animals;
    }

    [HttpGet("{id}")]
    public ActionResult<Animal> GetById(int id)
    {
        var animal = _context.Animals.Find(id);

        if (animal == null)
        {
            return NotFound();
        }

        return animal;
    }
    
    [HttpGet("type/{type}")]
    public IEnumerable<Animal> GetByType(string type)
    {
        return _context.Animals.Where(animal => animal.Type == type);
    }
    
    [HttpPost("create")]
    public ActionResult<Animal> Create(Animal animal)
    {
        _context.Animals.Add(animal);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetById), new { id = animal.Id }, animal);
    }
}