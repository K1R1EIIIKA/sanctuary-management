using System.ComponentModel.DataAnnotations.Schema;
using Project1.Models.Structure;
using Project1.Models.Templates;

namespace Project1.Models.Animals;

public class Bird : Animal
{
    [ForeignKey("Sanctuary")]
    public int SanctuaryId { get; set; }
    
    public Sanctuary Sanctuary { get; set; }
}