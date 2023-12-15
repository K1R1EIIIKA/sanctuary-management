using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Project1.Models;
using Project1.Models.Animals;
using System;
using System.Collections.Generic;
using System.Linq;
using Project1.Models.Structure;

namespace Project1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CapybaraController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly ILogger<CapybaraController> _logger;

        public CapybaraController(ILogger<CapybaraController> logger, AppDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Capybara> Get()
        {
            int sanctuaryId = 1;

            return _context.Capybaras.ToList();
        }
    }
}