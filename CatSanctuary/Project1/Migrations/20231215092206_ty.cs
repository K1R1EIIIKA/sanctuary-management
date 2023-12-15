using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project1.Migrations
{
    /// <inheritdoc />
    public partial class ty : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Capybara_Color",
                table: "Animals",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Capybara_Height",
                table: "Animals",
                type: "double",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Capybara_Weight",
                table: "Animals",
                type: "double",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Cat_Color",
                table: "Animals",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Color",
                table: "Animals",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "HasDeviations",
                table: "Animals",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<double>(
                name: "Height",
                table: "Animals",
                type: "double",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsMale",
                table: "Animals",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "KiwiEaten",
                table: "Animals",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Length",
                table: "Animals",
                type: "double",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TangerineCount",
                table: "Animals",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Weight",
                table: "Animals",
                type: "double",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Capybara_Color",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "Capybara_Height",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "Capybara_Weight",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "Cat_Color",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "Color",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "HasDeviations",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "Height",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "IsMale",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "KiwiEaten",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "Length",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "TangerineCount",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "Weight",
                table: "Animals");
        }
    }
}
