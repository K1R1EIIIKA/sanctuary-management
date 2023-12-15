using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Project1.Models.Templates;

public class Color
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Hex { get; set; }

    public static void SetBaseColors(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Color>().HasData(
            new Color {Id = -1, Name = "Черный", Hex = "#000000"},
            new Color {Id = -2, Name = "Белый", Hex = "#FFFFFF"},
            new Color {Id = -3, Name = "Красный", Hex = "#FF0000"},
            new Color {Id = -4, Name = "Зеленый", Hex = "#00FF00"},
            new Color {Id = -5, Name = "Синий", Hex = "#0000FF"},
            new Color {Id = -6, Name = "Желтый", Hex = "#FFFF00"},
            new Color {Id = -7, Name = "Бирюзовый", Hex = "#00FFFF"},
            new Color {Id = -8, Name = "Малиновый", Hex = "#FF00FF"},
            new Color {Id = -9, Name = "Серебряный", Hex = "#C0C0C0"},
            new Color {Id = -10, Name = "Серый", Hex = "#808080"},
            new Color {Id = -11, Name = "Бордовый", Hex = "#800000"},
            new Color {Id = -12, Name = "Оливковый", Hex = "#808000"},
            new Color {Id = -14, Name = "Фиолетовый", Hex = "#800080"},
            new Color {Id = -15, Name = "Морской", Hex = "#008080"},
            new Color {Id = -16, Name = "Ультрамариновый", Hex = "#000080"}
        );
    }
}