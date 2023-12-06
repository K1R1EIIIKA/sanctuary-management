namespace Project1.Models.Templates;

public abstract class Animal : Creature
{
    public DateTime BirthDate { get; set; }
        
    public string Type { get; set; }
}