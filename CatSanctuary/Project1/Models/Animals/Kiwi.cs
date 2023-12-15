using System.ComponentModel.DataAnnotations.Schema;
using Project1.Models.Structure;
using Project1.Models.Templates;
using Project1.Models.Templates.Interfaces;

namespace Project1.Models.Animals;

public class Kiwi : Animal, IFlying
{
    public override string Type => "Kiwi";
    
    public int KiwiEaten { get; set; }
}