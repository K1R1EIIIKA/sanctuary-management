using Project1.Models.Templates;

namespace Project1.Models.People;

public class Employee : Person
{
    public char Gender { get; set; }
    
    public int Age { get; set; }
    
    public double Salary { get; set; }
}