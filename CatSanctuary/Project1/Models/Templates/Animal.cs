using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Project1.Models.Structure;

namespace Project1.Models.Templates;

public class Animal
{
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    public DateTime BirthDate { get; set; }
    
    public bool IsMale { get; set; }
    
    public bool HasDeviations { get; set; }
    
    [ForeignKey("Sanctuary")]
    public int SanctuaryId { get; set; }
    
    [JsonIgnore]
    public Sanctuary Sanctuary { get; set; }
}