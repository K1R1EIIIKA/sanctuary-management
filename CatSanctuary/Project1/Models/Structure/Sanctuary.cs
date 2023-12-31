using Project1.Models.Templates;

namespace Project1.Models.Structure;

public class Sanctuary
{
    public int Id { get; set; }
    
    public List<Animal> Animals { get; set; } = new();
    
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public string Address { get; set; }
    
    public int AnimalsCount => Animals.Count(x => !x.IsTaken);
}