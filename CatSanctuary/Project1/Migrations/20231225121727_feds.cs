using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Project1.Migrations
{
    /// <inheritdoc />
    public partial class feds : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "EventId",
                table: "Sanctuaries",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Events",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Description = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Date = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Events", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Events",
                columns: new[] { "Id", "Date", "Description", "Name" },
                values: new object[,]
                {
                    { -4, new DateTime(2021, 10, 13, 0, 0, 0, 0, DateTimeKind.Unspecified), "День волонтера в нашем приюте", "День волонтера" },
                    { -3, new DateTime(2021, 10, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), "Конкурс \"Самый красивый кот\" в нашем приюте", "Конкурс \"Самый красивый кот\"" },
                    { -2, new DateTime(2021, 10, 11, 0, 0, 0, 0, DateTimeKind.Unspecified), "День открытых дверей в нашем приюте", "День открытых дверей" },
                    { -1, new DateTime(2021, 10, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "День рождения нашего приюта", "День рождения" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Sanctuaries_EventId",
                table: "Sanctuaries",
                column: "EventId");

            migrationBuilder.AddForeignKey(
                name: "FK_Sanctuaries_Events_EventId",
                table: "Sanctuaries",
                column: "EventId",
                principalTable: "Events",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sanctuaries_Events_EventId",
                table: "Sanctuaries");

            migrationBuilder.DropTable(
                name: "Events");

            migrationBuilder.DropIndex(
                name: "IX_Sanctuaries_EventId",
                table: "Sanctuaries");

            migrationBuilder.DropColumn(
                name: "EventId",
                table: "Sanctuaries");
        }
    }
}
