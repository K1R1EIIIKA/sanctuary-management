using System.ComponentModel.DataAnnotations.Schema;
using Project1.Models.Templates;

namespace Project1.Models.People;

public class Customer : Person
{
    public string Email { get; set; }
    
    [ForeignKey("Animal")]
    public int AnimalId { get; set; }
}