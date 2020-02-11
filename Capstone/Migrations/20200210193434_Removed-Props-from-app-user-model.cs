using Microsoft.EntityFrameworkCore.Migrations;

namespace Capstone.Migrations
{
    public partial class RemovedPropsfromappusermodel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "StreetAddress",
                table: "AspNetUsers");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "1258ddaf-6152-47a6-a562-1ce3c99b4f8c", "AQAAAAEAACcQAAAAEE7+TI4JjiHaSCVANobgZ7iCAECSe8xkNP3b1IVRPJQVL5C1zsyFVS3JdREF4cArHw==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StreetAddress",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                columns: new[] { "ConcurrencyStamp", "FirstName", "LastName", "PasswordHash", "StreetAddress" },
                values: new object[] { "60cacbce-7065-48fb-93da-8dc57f686263", "admin", "admin", "AQAAAAEAACcQAAAAEF2icDbslpOZZNfhSp3vAjlybnkJU0aOlE6P6Xb6rBuDy7DPdvHpbaC7kUaNYFZ38Q==", "123 Infinity Way" });
        }
    }
}
