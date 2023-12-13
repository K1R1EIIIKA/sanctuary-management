using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Project1.Models;
using Project1.Models.Animals;
using System;
using System.Collections.Generic;
using System.Linq;
using Project1.Models.Structure;
using Project1.Models.Templates;

namespace Project1.Controllers;

[ApiController]
[Route("[controller]")]
public class SanctuaryController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly ILogger<SanctuaryController> _logger;

    public SanctuaryController(ILogger<SanctuaryController> logger, AppDbContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet]
    public IEnumerable<Sanctuary> Get()
    {
        Sanctuary sanctuary = new Sanctuary
        {
            Name = "Сапожок",
            Animals = new List<Animal>()
        };

        _context.Sanctuaries.Add(sanctuary);
        _context.SaveChanges();

        Capybara newCapybara = new Capybara
        {
            Name = "UniqueName" + Guid.NewGuid(),
            BirthDate = new DateTime(2019, 1, 1),
            SanctuaryId = sanctuary.Id 
        };
        _context.Capybaras.Add(newCapybara);

        foreach (var animal in _context.Animals)
        {
            if (animal.SanctuaryId == sanctuary.Id)
            {
                sanctuary.Animals.Add(animal);
            }
        }

        _context.SaveChanges();

        return _context.Sanctuaries.ToList();
    }
}