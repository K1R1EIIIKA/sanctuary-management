using Microsoft.AspNetCore.Mvc;
using Project1.Models;
using Project1.Models.People;

namespace Project1.Controllers;

[ApiController]
[Route("[controller]")]
public class EmployeeController : ControllerBase, IControl<Employee>
{
    private readonly AppDbContext _context;
    private readonly ILogger<EmployeeController> _logger;

    public EmployeeController(ILogger<EmployeeController> logger, AppDbContext context)
    {
        _logger = logger;
        _context = context;
    }
    
    [HttpGet]
    public IEnumerable<Employee> Get()
    {
        return _context.Employees;
    }
    
    [HttpGet("{id}")]
    public ActionResult<Employee> GetById(int id)
    {
        var employee = _context.Employees.Find(id);

        if (employee == null)
        {
            return NotFound();
        }

        return employee;
    }
}