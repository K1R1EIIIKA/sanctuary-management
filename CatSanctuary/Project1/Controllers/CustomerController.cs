using Microsoft.AspNetCore.Mvc;
using Project1.Models;
using Project1.Models.People;
using Project1.Models.Templates;

namespace Project1.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CustomerController : ControllerBase, IControl<Customer>
{
    private readonly AppDbContext _context;
    private readonly ILogger<CustomerController> _logger;

    public CustomerController(ILogger<CustomerController> logger, AppDbContext context)
    {
        _logger = logger;
        _context = context;
    }
    
    [HttpGet]
    public IEnumerable<Customer> Get()
    {
        return _context.Customers;
    }
    
    [HttpGet("{id}")]
    public ActionResult<Customer> GetById(int id)
    {
        var customer = _context.Customers.Find(id);

        if (customer == null)
        {
            return NotFound();
        }

        return customer;
    }
}