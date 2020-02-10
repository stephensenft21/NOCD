using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Capstone.Models.Data;
using Capstone.Models;

namespace Capstone.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<RefreshToken> RefreshToken { get; set; }
        public DbSet<Record> Record { get; set; }
        public DbSet<PatientAction> PatientAction { get; set; }
        public DbSet<Compulsion> Compulsion { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Record>()
               .Property(r => r.TimeStamp)
               .HasDefaultValueSql("GETDATE()");

            ApplicationUser user = new ApplicationUser
            {
               
                UserName = "admin@admin.com",
                NormalizedUserName = "ADMIN@ADMIN.COM",
                Email = "admin@admin.com",
                NormalizedEmail = "ADMIN@ADMIN.COM",
                EmailConfirmed = true,
                LockoutEnabled = false,
                SecurityStamp = "7f434309-a4d9-48e9-9ebb-8803db794577",
                Id = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa"
            };
            var passwordHash = new PasswordHasher<ApplicationUser>();
            user.PasswordHash = passwordHash.HashPassword(user, "Admin8*");
            modelBuilder.Entity<ApplicationUser>().HasData(user);
            modelBuilder.Entity<Compulsion>().HasData(
        new Compulsion()
        {
            CompulsionId = 1,
            Description = "Excessive Cleaning",
            ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
            //User Id 1


        },
         new Compulsion()
         {
             CompulsionId = 2,
             Description = "Tapping Windows",
             ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
             //User Id 2


         },
          new Compulsion()
          {
              CompulsionId = 3,
              Description = "Blinking Repeatedly",
              ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
              //User Id 2


          },
           new Compulsion()
           {
               CompulsionId = 4,
               Description = "Excessive Cleaning",
               ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
               //User Id 2

           },
            new Compulsion()
            {
                CompulsionId = 5,
                Description = "Excessive Cleaning",
                ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                //UserId 2

            },
             new Compulsion()
             {
                 CompulsionId = 6,
                 Description = "Excessive Cleaning",
                 ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                 //UserId 2


             },
              new Compulsion()
              {
                  CompulsionId = 7,
                  Description = "Excessive Cleaning",
                  ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                  //user id 1
              }

      );
            modelBuilder.Entity<PatientAction>().HasData(
                new PatientAction()
                {
                    PatientActionId = 1,
                    ActionName = "Resist"
                },
                new PatientAction()
                {
                    PatientActionId = 2,
                    ActionName = "Submits"
                },
                new PatientAction()
                {
                    PatientActionId = 3,
                    ActionName = "Undo"
                }



                );
            modelBuilder.Entity<Record>().HasData(

               new Record()
               {
                   RecordId = 1,
                   ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                   CompulsionId = 1,
                   PatientActionId = 1,
                  
               },

              new Record()
              {
                  RecordId = 2,
                  ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                  CompulsionId = 1,
                  PatientActionId = 1,
                 
              },
              new Record()
              {
                  RecordId = 3,
                  ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                  CompulsionId = 1,
                  PatientActionId = 1,
                 
              },
              new Record()
              {
                  RecordId = 4,
                  ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                  CompulsionId = 1,
                  PatientActionId = 1,
                 
              },
              new Record()
              {
                  RecordId = 5,
                  ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                  CompulsionId = 1,
                  PatientActionId = 1,
                 
              },
              new Record()
              {
                  RecordId = 6,
                  ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                  CompulsionId = 1,
                  PatientActionId = 1,
                 
              },
              new Record()
              {
                  RecordId = 7,
                  ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                  CompulsionId = 1,
                  PatientActionId = 1,
                 

              },
              new Record()
              {
                  RecordId = 8,
                  ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                  CompulsionId = 1,
                  PatientActionId = 1,
                 
              },
              new Record()
              {
                  RecordId = 9,
                  ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                  CompulsionId = 1,
                  PatientActionId = 1,
                 

              },
              new Record()
              {
                  RecordId = 10,
                  ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                  CompulsionId = 1,
                  PatientActionId = 1,
                 

              },
               new Record()
               {
                   RecordId = 11,
                   ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                   CompulsionId = 2,
                   PatientActionId = 1,
                  

               },
                new Record()
                {
                    RecordId = 12,
                    ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                    CompulsionId = 2,
                    PatientActionId = 3,
                   

                },
                 new Record()
                 {
                     RecordId = 13,
                     ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                     CompulsionId = 2,
                     PatientActionId = 2,
                    

                 },
                  new Record()
                  {
                      RecordId = 14,
                      ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                      CompulsionId = 2,
                      PatientActionId = 3,
                     

                  },
                   new Record()
                   {
                       RecordId = 15,
                       ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                       CompulsionId = 2,
                       PatientActionId = 2,
                      

                   },
                    new Record()
                    {
                        RecordId = 16,
                        ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                        CompulsionId = 2,
                        PatientActionId = 1,
                       

                    },
                     new Record()
                     {
                         RecordId = 17,
                         ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                         CompulsionId = 2,
                         PatientActionId = 1,
                        

                     },

                      new Record()
                      {
                          RecordId = 18,
                          ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                          CompulsionId = 2,
                          PatientActionId = 1,
                         

                      },
                       new Record()
                       {
                           RecordId = 19,
                           ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                           CompulsionId = 2,
                           PatientActionId = 1,
                          

                       },
                        new Record()
                        {
                            RecordId = 20,
                            ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                            CompulsionId = 2,
                            PatientActionId = 1,
                           

                        },
                            new Record()
                            {
                                RecordId = 21,
                                ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                                CompulsionId = 3,
                                PatientActionId = 2,
                               

                            },
                                new Record()
                                {
                                    RecordId = 22,
                                    ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                                    CompulsionId = 3,
                                    PatientActionId = 1,
                                   

                                },
                                    new Record()
                                    {
                                        RecordId = 23,
                                        ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                                        CompulsionId = 3,
                                        PatientActionId = 1,
                                       

                                    },
                                        new Record()
                                        {
                                            RecordId = 24,
                                            ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                                            CompulsionId = 3,
                                            PatientActionId = 2,
                                           

                                        },
                                            new Record()
                                            {
                                                RecordId = 25,
                                                ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                                                CompulsionId = 3,
                                                PatientActionId = 3,
                                               

                                            },
                                                new Record()
                                                {
                                                    RecordId = 26,
                                                    ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                                                    CompulsionId = 3,
                                                    PatientActionId = 3,
                                                   

                                                },
                                                    new Record()
                                                    {
                                                        RecordId = 27,
                                                        ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                                                        CompulsionId = 3,
                                                        PatientActionId = 3,
                                                       

                                                    },
                                                        new Record()
                                                        {
                                                            RecordId = 28,
                                                            ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                                                            CompulsionId = 3,
                                                            PatientActionId = 3,
                                                           

                                                        },
                                                            new Record()
                                                            {
                                                                RecordId = 29,
                                                                ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                                                                CompulsionId = 3,
                                                                PatientActionId = 3,
                                                               

                                                            }, new Record()
                                                            {
                                                                RecordId = 30,
                                                                ApplicationUserId = "8f0ab5d8-905f-4d54-930a-e7d61ae57dfa",
                                                                CompulsionId = 3,
                                                                PatientActionId = 3,
                                                               

                                                            }




      );




        }



    }
}

