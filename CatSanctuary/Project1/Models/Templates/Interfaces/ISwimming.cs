using System.ComponentModel.DataAnnotations.Schema;

namespace Project1.Models.Templates.Interfaces;

public interface ISwimming
{
    [ForeignKey("Color")]
    public int ColorId { get; set; }
    
    public double Length { get; set; }
}