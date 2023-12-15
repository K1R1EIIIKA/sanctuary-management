using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project1.Migrations
{
    /// <inheritdoc />
    public partial class j : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -13);

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -16,
                column: "Name",
                value: "Ультрамариновый");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -15,
                column: "Name",
                value: "Морской");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -14,
                column: "Name",
                value: "Фиолетовый");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -12,
                column: "Name",
                value: "Оливковый");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -11,
                column: "Name",
                value: "Бордовый");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -10,
                column: "Name",
                value: "Серый");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -9,
                column: "Name",
                value: "Серебряный");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -8,
                column: "Name",
                value: "Малиновый");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -7,
                column: "Name",
                value: "Бирюзовый");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -6,
                column: "Name",
                value: "Желтый");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -5,
                column: "Name",
                value: "Синий");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -4,
                column: "Name",
                value: "Зеленый");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -3,
                column: "Name",
                value: "Красный");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -2,
                column: "Name",
                value: "Белый");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -1,
                column: "Name",
                value: "Черный");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -16,
                column: "Name",
                value: "Navy");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -15,
                column: "Name",
                value: "Teal");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -14,
                column: "Name",
                value: "Purple");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -12,
                column: "Name",
                value: "Olive");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -11,
                column: "Name",
                value: "Maroon");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -10,
                column: "Name",
                value: "Gray");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -9,
                column: "Name",
                value: "Silver");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -8,
                column: "Name",
                value: "Magenta");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -7,
                column: "Name",
                value: "Cyan");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -6,
                column: "Name",
                value: "Yellow");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -5,
                column: "Name",
                value: "Blue");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -4,
                column: "Name",
                value: "Green");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -3,
                column: "Name",
                value: "Red");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -2,
                column: "Name",
                value: "White");

            migrationBuilder.UpdateData(
                table: "Colors",
                keyColumn: "Id",
                keyValue: -1,
                column: "Name",
                value: "Black");

            migrationBuilder.InsertData(
                table: "Colors",
                columns: new[] { "Id", "Hex", "Name" },
                values: new object[] { -13, "#008000", "Green" });
        }
    }
}
