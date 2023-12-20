namespace Project1.Controllers.RequestModels;

public class AnimalCreateRequestModel
{
    public int SanctuaryId { get; set; }
    public string Type { get; set; }
    public string Name { get; set; }
    public DateTime BirthDate { get; set; }
    public bool HasDeviations { get; set; }
    public bool IsMale { get; set; }
    
    public int ColorId { get; set; }
    public double Height { get; set; }
    public double Weight { get; set; }
    public double Length { get; set; }
    public int TangerineCount { get; set; }
    public int KiwiCount { get; set; }
    public double Wingspan { get; set; }
}