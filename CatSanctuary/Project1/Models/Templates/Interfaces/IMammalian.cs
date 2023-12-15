using System.ComponentModel.DataAnnotations.Schema;

namespace Project1.Models.Templates.Interfaces;

public interface IMammalian
{
    [ForeignKey("Color")]
    public int ColorId { get; set; }
    
    public double Height { get; set; }
    
    public double Weight { get; set; }
}