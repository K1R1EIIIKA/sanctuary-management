using System.ComponentModel.DataAnnotations.Schema;
using Project1.Models.Structure;
using Project1.Models.Templates;
using Project1.Models.Templates.Interfaces;

namespace Project1.Models.Animals;

public class Cat : Animal, IMammalian
{
    public override string Type => "Cat";
    
    public Color Color { get; set; }
    
    public double Height { get; set; }
    
    public double Weight { get; set; }
}