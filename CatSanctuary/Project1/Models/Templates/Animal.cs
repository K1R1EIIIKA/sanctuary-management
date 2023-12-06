using System.ComponentModel.DataAnnotations.Schema;
using Project1.Models.Structure;

namespace Project1.Models.Templates;

public class Animal
{
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    public DateTime BirthDate { get; set; }
    
    [ForeignKey("Sanctuary")]
    public int SanctuaryId { get; set; }
    
    public Sanctuary Sanctuary { get; set; }
}