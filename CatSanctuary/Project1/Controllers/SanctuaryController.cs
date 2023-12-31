using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Project1.Models;
using Project1.Models.Animals;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using Project1.Controllers.RequestModels;
using Project1.Models.People;
using Project1.Models.Structure;
using Project1.Models.Templates;

namespace Project1.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SanctuaryController : ControllerBase, IControl<Sanctuary>
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
        var sanctuaries = _context.Sanctuaries.ToList();
        
        foreach (var sanctuary in sanctuaries)
        {
            var sanctuaryAnimals = _context.Animals.Where(a => a.SanctuaryId == sanctuary.Id).ToList();
            sanctuary.Animals = sanctuaryAnimals;
        }
        
        return sanctuaries;
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
        
        var capybaras = _context.Capybaras.Where(c => c.SanctuaryId == id).ToList();
        var sharks = _context.Sharks.Where(s => s.SanctuaryId == id).ToList();
        var kiwis = _context.Kiwis.Where(k => k.SanctuaryId == id).ToList();
        var cats = _context.Cats.Where(ct => ct.SanctuaryId == id).ToList();

        var allAnimals = new List<Animal>();
        allAnimals.AddRange(capybaras);
        allAnimals.AddRange(sharks);
        allAnimals.AddRange(kiwis);
        allAnimals.AddRange(cats);
        
        sanctuary.Animals = allAnimals;

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
    
    [HttpPost("create")]
    public ActionResult<Sanctuary> Create([FromBody] SancruaryCreateRequestModel data)
    {
        Sanctuary sanctuary = new Sanctuary
        {
            Name = data.Name,
            Description = data.Description,
            Address = data.Address
        };

        _context.Sanctuaries.Add(sanctuary);
        _context.SaveChanges();

        return sanctuary;
    }

    [HttpPost("{id}/animal/{animalId}/take")]
    public ActionResult<object> TakeAnimal(int id, int animalId, [FromBody] AnimalRequestModel data)
    {
        var sanctuary = _context.Sanctuaries.FirstOrDefault(s => s.Id == id);

        if (sanctuary == null)
        {
            return NotFound();
        }

        string phoneNumber = data.PhoneNumber;
        string fullName = data.FullName;
        string email = data.Email;

        var capybara = _context.Capybaras.FirstOrDefault(c => c.Id == animalId && c.SanctuaryId == id);
        var shark = _context.Sharks.FirstOrDefault(s => s.Id == animalId && s.SanctuaryId == id);
        var kiwi = _context.Kiwis.FirstOrDefault(k => k.Id == animalId && k.SanctuaryId == id);
        var cat = _context.Cats.FirstOrDefault(ct => ct.Id == animalId && ct.SanctuaryId == id);

        if (capybara != null)
            if (TakeAnimalLogic(phoneNumber, email, capybara, fullName)) return BadRequest();

        if (shark != null)
            if (TakeAnimalLogic(phoneNumber, email, shark, fullName)) return BadRequest();
            
        if (kiwi != null)
            if (TakeAnimalLogic(phoneNumber, email, kiwi, fullName)) return BadRequest();
            
        if (cat != null)
            if (TakeAnimalLogic(phoneNumber, email, cat, fullName)) return BadRequest();
        
        else
            return NotFound();

        _context.SaveChanges();

        return Ok();
    }

    private bool TakeAnimalLogic(string phoneNumber, string email, Animal capybara, string fullName)
    {
        if (_context.Customers.Any(c => c.PhoneNumber == phoneNumber || c.Email == email || c.AnimalId == capybara.Id))
            return true;

        Customer customer = CreateCustomer(fullName, phoneNumber, email);
        _context.Customers.Add(customer);
        capybara.IsTaken = true;
        _context.SaveChanges();

        customer.AnimalId = capybara.Id;

        return false;
    }

    private Customer CreateCustomer(string fullName, string phoneNumber, string email)
    {
        Customer customer = new Customer
        {
            Fio = fullName,
            PhoneNumber = phoneNumber,
            Email = email
        };

        return customer;
    }
}