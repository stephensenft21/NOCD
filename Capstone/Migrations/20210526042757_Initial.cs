using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Capstone.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PatientAction",
                columns: table => new
                {
                    PatientActionId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ActionName = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PatientAction", x => x.PatientActionId);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(maxLength: 128, nullable: false),
                    ProviderKey = table.Column<string>(maxLength: 128, nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(maxLength: 128, nullable: false),
                    Name = table.Column<string>(maxLength: 128, nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Compulsion",
                columns: table => new
                {
                    CompulsionId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(nullable: false),
                    ApplicationUserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Compulsion", x => x.CompulsionId);
                    table.ForeignKey(
                        name: "FK_Compulsion_AspNetUsers_ApplicationUserId",
                        column: x => x.ApplicationUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RefreshToken",
                columns: table => new
                {
                    TokenId = table.Column<Guid>(nullable: false),
                    JwtId = table.Column<string>(nullable: true),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    Expires = table.Column<DateTime>(nullable: false),
                    Used = table.Column<bool>(nullable: false),
                    Invalidated = table.Column<bool>(nullable: false),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RefreshToken", x => x.TokenId);
                    table.ForeignKey(
                        name: "FK_RefreshToken_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Record",
                columns: table => new
                {
                    RecordId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ApplicationUserId = table.Column<string>(nullable: false),
                    TimeStamp = table.Column<DateTime>(nullable: false, defaultValueSql: "GETDATE()"),
                    CompulsionId = table.Column<int>(nullable: false),
                    PatientActionId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Record", x => x.RecordId);
                    table.ForeignKey(
                        name: "FK_Record_AspNetUsers_ApplicationUserId",
                        column: x => x.ApplicationUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Record_Compulsion_CompulsionId",
                        column: x => x.CompulsionId,
                        principalTable: "Compulsion",
                        principalColumn: "CompulsionId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Record_PatientAction_PatientActionId",
                        column: x => x.PatientActionId,
                        principalTable: "PatientAction",
                        principalColumn: "PatientActionId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 0, "8259c918-a023-4386-a764-0d9756c0c17d", "admin@admin.com", true, false, null, "ADMIN@ADMIN.COM", "ADMIN@ADMIN.COM", "AQAAAAEAACcQAAAAEBefIt2dDe+gsj5d+Djeh4OrG13EI5GbGu6JDNTmxdJMWFzQGJMe7yryIPgHSpGLtA==", null, false, "7f434309-a4d9-48e9-9ebb-8803db794577", false, "admin@admin.com" });

            migrationBuilder.InsertData(
                table: "PatientAction",
                columns: new[] { "PatientActionId", "ActionName" },
                values: new object[,]
                {
                    { 1, "Resist" },
                    { 2, "Submits" },
                    { 3, "Undo" }
                });

            migrationBuilder.InsertData(
                table: "Compulsion",
                columns: new[] { "CompulsionId", "ApplicationUserId", "Description" },
                values: new object[,]
                {
                    { 1, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", "Excessive Cleaning" },
                    { 2, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", "Tapping Windows" },
                    { 3, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", "Blinking Repeatedly" },
                    { 4, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", "Excessive Cleaning" },
                    { 5, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", "Excessive Cleaning" },
                    { 6, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", "Excessive Cleaning" },
                    { 7, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", "Excessive Cleaning" }
                });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 1, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 1, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 28, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 3, 3 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 27, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 3, 3 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 26, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 3, 3 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 25, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 3, 3 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 24, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 3, 2 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 23, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 3, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 22, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 3, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 21, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 3, 2 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 20, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 2, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 19, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 2, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 18, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 2, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 17, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 2, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 16, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 2, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 15, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 2, 2 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 14, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 2, 3 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 13, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 2, 2 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 12, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 2, 3 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 11, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 2, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 10, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 1, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 9, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 1, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 8, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 1, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 7, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 1, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 6, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 1, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 5, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 1, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 4, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 1, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 3, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 1, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 2, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 1, 1 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 29, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 3, 3 });

            migrationBuilder.InsertData(
                table: "Record",
                columns: new[] { "RecordId", "ApplicationUserId", "CompulsionId", "PatientActionId" },
                values: new object[] { 30, "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa", 3, 3 });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Compulsion_ApplicationUserId",
                table: "Compulsion",
                column: "ApplicationUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Record_ApplicationUserId",
                table: "Record",
                column: "ApplicationUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Record_CompulsionId",
                table: "Record",
                column: "CompulsionId");

            migrationBuilder.CreateIndex(
                name: "IX_Record_PatientActionId",
                table: "Record",
                column: "PatientActionId");

            migrationBuilder.CreateIndex(
                name: "IX_RefreshToken_UserId",
                table: "RefreshToken",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Record");

            migrationBuilder.DropTable(
                name: "RefreshToken");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Compulsion");

            migrationBuilder.DropTable(
                name: "PatientAction");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
