﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Project1.Models;

#nullable disable

namespace Project1.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20231206124939_Initial")]
    partial class Initial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.14")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Project1.Models.People.Customer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("varchar(1)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("Project1.Models.People.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("varchar(1)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<double>("Salary")
                        .HasColumnType("double");

                    b.HasKey("Id");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("Project1.Models.Structure.Event", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Events");
                });

            modelBuilder.Entity("Project1.Models.Structure.Sanctuary", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Sanctuaries");
                });

            modelBuilder.Entity("Project1.Models.Templates.Animal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("SanctuaryId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("SanctuaryId");

                    b.ToTable("Animal");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Animal");

                    b.UseTphMappingStrategy();
                });

            modelBuilder.Entity("Project1.Models.Animals.Bird", b =>
                {
                    b.HasBaseType("Project1.Models.Templates.Animal");

                    b.HasDiscriminator().HasValue("Bird");
                });

            modelBuilder.Entity("Project1.Models.Animals.Capybara", b =>
                {
                    b.HasBaseType("Project1.Models.Templates.Animal");

                    b.HasDiscriminator().HasValue("Capybara");
                });

            modelBuilder.Entity("Project1.Models.Animals.Cat", b =>
                {
                    b.HasBaseType("Project1.Models.Templates.Animal");

                    b.HasDiscriminator().HasValue("Cat");
                });

            modelBuilder.Entity("Project1.Models.Animals.Shark", b =>
                {
                    b.HasBaseType("Project1.Models.Templates.Animal");

                    b.HasDiscriminator().HasValue("Shark");
                });

            modelBuilder.Entity("Project1.Models.Templates.Animal", b =>
                {
                    b.HasOne("Project1.Models.Structure.Sanctuary", "Sanctuary")
                        .WithMany("Animals")
                        .HasForeignKey("SanctuaryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Sanctuary");
                });

            modelBuilder.Entity("Project1.Models.Structure.Sanctuary", b =>
                {
                    b.Navigation("Animals");
                });
#pragma warning restore 612, 618
        }
    }
}
