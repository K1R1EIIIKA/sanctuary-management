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
            migrationBuilder.DropForeignKey(
                name: "FK_Animal_Sanctuaries_SanctuaryId",
                table: "Animal");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Animal",
                table: "Animal");

            migrationBuilder.RenameTable(
                name: "Animal",
                newName: "Animals");

            migrationBuilder.RenameIndex(
                name: "IX_Animal_SanctuaryId",
                table: "Animals",
                newName: "IX_Animals_SanctuaryId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Animals",
                table: "Animals",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Animals_Sanctuaries_SanctuaryId",
                table: "Animals",
                column: "SanctuaryId",
                principalTable: "Sanctuaries",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Animals_Sanctuaries_SanctuaryId",
                table: "Animals");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Animals",
                table: "Animals");

            migrationBuilder.RenameTable(
                name: "Animals",
                newName: "Animal");

            migrationBuilder.RenameIndex(
                name: "IX_Animals_SanctuaryId",
                table: "Animal",
                newName: "IX_Animal_SanctuaryId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Animal",
                table: "Animal",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Animal_Sanctuaries_SanctuaryId",
                table: "Animal",
                column: "SanctuaryId",
                principalTable: "Sanctuaries",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
