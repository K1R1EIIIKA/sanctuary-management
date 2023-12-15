using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Project1.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Colors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Hex = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Colors", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    AnimalId = table.Column<int>(type: "int", nullable: false),
                    Fio = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    PhoneNumber = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Gender = table.Column<string>(type: "varchar(1)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Salary = table.Column<double>(type: "double", nullable: false),
                    Fio = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    PhoneNumber = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Events",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Events", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Sanctuaries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Description = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Address = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sanctuaries", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Animals",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Type = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    BirthDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    IsMale = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    HasDeviations = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    SanctuaryId = table.Column<int>(type: "int", nullable: false),
                    TangerineCount = table.Column<int>(type: "int", nullable: true),
                    Capybara_ColorId = table.Column<int>(type: "int", nullable: true),
                    Capybara_Height = table.Column<double>(type: "double", nullable: true),
                    Capybara_Weight = table.Column<double>(type: "double", nullable: true),
                    Cat_ColorId = table.Column<int>(type: "int", nullable: true),
                    Height = table.Column<double>(type: "double", nullable: true),
                    Weight = table.Column<double>(type: "double", nullable: true),
                    KiwiEaten = table.Column<int>(type: "int", nullable: true),
                    ColorId = table.Column<int>(type: "int", nullable: true),
                    Length = table.Column<double>(type: "double", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Animals", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Animals_Sanctuaries_SanctuaryId",
                        column: x => x.SanctuaryId,
                        principalTable: "Sanctuaries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Colors",
                columns: new[] { "Id", "Hex", "Name" },
                values: new object[,]
                {
                    { -16, "#000080", "Ультрамариновый" },
                    { -15, "#008080", "Морской" },
                    { -14, "#800080", "Фиолетовый" },
                    { -12, "#808000", "Оливковый" },
                    { -11, "#800000", "Бордовый" },
                    { -10, "#808080", "Серый" },
                    { -9, "#C0C0C0", "Серебряный" },
                    { -8, "#FF00FF", "Малиновый" },
                    { -7, "#00FFFF", "Бирюзовый" },
                    { -6, "#FFFF00", "Желтый" },
                    { -5, "#0000FF", "Синий" },
                    { -4, "#00FF00", "Зеленый" },
                    { -3, "#FF0000", "Красный" },
                    { -2, "#FFFFFF", "Белый" },
                    { -1, "#000000", "Черный" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Animals_SanctuaryId",
                table: "Animals",
                column: "SanctuaryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Animals");

            migrationBuilder.DropTable(
                name: "Colors");

            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "Events");

            migrationBuilder.DropTable(
                name: "Sanctuaries");
        }
    }
}
