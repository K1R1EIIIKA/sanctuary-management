using Microsoft.AspNetCore.Mvc;
using Project1.Models;
using Project1.Models.Templates;

namespace Project1.Controllers;

[ApiController]
[Route("[controller]")]
public class AnimalColorController : ControllerBase, IControl<Color>
{
    private readonly AppDbContext _context;
    private readonly ILogger<AnimalColorController> _logger;

    public AnimalColorController(ILogger<AnimalColorController> logger, AppDbContext context)
    {
        _logger = logger;
        _context = context;
    }
    
    [HttpGet]
    public IEnumerable<Color> Get()
    {
        return _context.Colors;
    }
    
    [HttpGet("{id}")]
    public ActionResult<Color> GetById(int id)
    {
        var color = _context.Colors.Find(id);

        if (color == null)
        {
            return NotFound();
        }

        return color;
    }
}