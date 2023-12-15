using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Project1.Models;
using Project1.Models.Animals;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
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
            Animals = new List<Animal>(),
            Description = "Самый лучший зоопарк в мире",
            Address = "Москва, ул. Пушкина, дом Колотушкина"
        };

        _context.Sanctuaries.Add(sanctuary);
        _context.SaveChanges();

        Capybara newCapybara = new Capybara
        {
            Name = "UniqueName" + Guid.NewGuid(),
            BirthDate = new DateTime(2019, 1, 1),
            SanctuaryId = sanctuary.Id,
            Weight = 10,
            Height = 10,
            TangerineCount = 150,
            Type = "Capybara",
        };
        Capybara newwCapybara = new Capybara
        {
            Name = "UniqueName" + Guid.NewGuid(),
            BirthDate = new DateTime(2019, 1, 1),
            SanctuaryId = sanctuary.Id,
            Weight = 10,
            Height = 10,
            TangerineCount = 150,
            Type = "Capybara",
        };
        _context.Capybaras.Add(newCapybara);
        _context.Capybaras.Add(newwCapybara);

        Shark newShark = new Shark
        {
            Name = "UniqueName" + Guid.NewGuid(),
            BirthDate = new DateTime(2019, 1, 1),
            Type = "Shark",
            Length = 320,
            HasDeviations = false,
            IsMale = true,
            SanctuaryId = sanctuary.Id,
        };
        
        _context.Sharks.Add(newShark);

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

    [HttpGet("{id}")]
    public ActionResult<Sanctuary> GetById(int id)
    {
        var sanctuary = _context.Sanctuaries
            .Include(s => s.Animals)
            .FirstOrDefault(s => s.Id == id);

        if (sanctuary == null)
        {
            return NotFound();
        }

        return sanctuary;
    }

    [HttpGet("{id}/animal")]
    public ActionResult<IEnumerable<object>> GetAnimals(int id)
    {
        var sanctuary = _context.Sanctuaries.FirstOrDefault(s => s.Id == id);

        if (sanctuary == null)
        {
            return NotFound();
        }

        var capybaras = _context.Capybaras.Where(c => c.SanctuaryId == id).ToList();
        var sharks = _context.Sharks.Where(s => s.SanctuaryId == id).ToList();
        var kiwis = _context.Kiwis.Where(k => k.SanctuaryId == id).ToList();
        var cats = _context.Cats.Where(ct => ct.SanctuaryId == id).ToList();

        var allAnimals = new List<object>();
        allAnimals.AddRange(capybaras);
        allAnimals.AddRange(sharks);
        allAnimals.AddRange(kiwis);
        allAnimals.AddRange(cats);

        return allAnimals;
    }

    [HttpGet("{id}/animal/{animalId}")]
    public ActionResult<object> GetAnimalById(int id, int animalId)
    {
        var sanctuary = _context.Sanctuaries.FirstOrDefault(s => s.Id == id);

        if (sanctuary == null)
        {
            return NotFound();
        }

        var capybara = _context.Capybaras.FirstOrDefault(c => c.Id == animalId && c.SanctuaryId == id);
        var shark = _context.Sharks.FirstOrDefault(s => s.Id == animalId && s.SanctuaryId == id);
        var kiwi = _context.Kiwis.FirstOrDefault(k => k.Id == animalId && k.SanctuaryId == id);
        var cat = _context.Cats.FirstOrDefault(ct => ct.Id == animalId && ct.SanctuaryId == id);

        return capybara ?? shark ?? kiwi ?? cat ?? (ActionResult<object>)NotFound();
    }
}