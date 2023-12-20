using Microsoft.AspNetCore.Mvc;
using Project1.Controllers.RequestModels;
using Project1.Models;
using Project1.Models.Animals;
using Project1.Models.Templates;

namespace Project1.Controllers;

[ApiController]
[Route("api/[controller]")]
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
    public ActionResult<Animal> Create([FromBody] AnimalCreateRequestModel data)
    {
        Animal animal = null;
        switch (data.Type)
        {
            case "Capybara":
                animal = new Capybara
                {
                    Name = data.Name,
                    BirthDate = data.BirthDate,
                    SanctuaryId = data.SanctuaryId,
                    Weight = data.Weight,
                    Height = data.Height,
                    TangerineCount = data.TangerineCount,
                    ColorId = data.ColorId,
                    IsMale = data.IsMale,
                    HasDeviations = data.HasDeviations,
                };
                break;
            case "Kiwi":
                animal = new Kiwi
                {
                    Name = data.Name,
                    BirthDate = data.BirthDate,
                    SanctuaryId = data.SanctuaryId,
                    HasDeviations = data.HasDeviations,
                    IsMale = data.IsMale,
                    KiwiEaten = data.KiwiCount,
                    Wingspan = data.Wingspan,
                };
                break;
            case "Cat":
                animal = new Cat
                {
                    Name = data.Name,
                    BirthDate = data.BirthDate,
                    SanctuaryId = data.SanctuaryId,
                    Weight = data.Weight,
                    Height = data.Height,
                    ColorId = data.ColorId,
                    IsMale = data.IsMale,
                    HasDeviations = data.HasDeviations,
                    
                };
                break;
            case "Shark":
                animal = new Shark
                {
                    Name = data.Name,
                    BirthDate = data.BirthDate,
                    SanctuaryId = data.SanctuaryId,
                    HasDeviations = data.HasDeviations,
                    IsMale = data.IsMale,
                    Length = data.Length,
                    ColorId = data.ColorId,
                };
                break;
            default:
                return BadRequest();
        }

        _context.Animals.Add(animal);
        _context.SaveChanges();

        return Ok();
    }
}