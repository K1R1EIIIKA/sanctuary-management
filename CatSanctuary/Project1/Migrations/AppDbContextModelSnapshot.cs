﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Project1.Models;

#nullable disable

namespace Project1.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
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

                    b.Property<int>("AnimalId")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Fio")
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

                    b.Property<string>("Fio")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("varchar(1)");

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

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

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

                    b.Property<bool>("HasDeviations")
                        .HasColumnType("tinyint(1)");

                    b.Property<bool>("IsMale")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("SanctuaryId")
                        .HasColumnType("int");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("SanctuaryId");

                    b.ToTable("Animals");

                    b.HasDiscriminator<string>("Type").HasValue("Animal");

                    b.UseTphMappingStrategy();
                });

            modelBuilder.Entity("Project1.Models.Templates.Color", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Hex")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Colors");

                    b.HasData(
                        new
                        {
                            Id = -1,
                            Hex = "#000000",
                            Name = "Черный"
                        },
                        new
                        {
                            Id = -2,
                            Hex = "#FFFFFF",
                            Name = "Белый"
                        },
                        new
                        {
                            Id = -3,
                            Hex = "#FF0000",
                            Name = "Красный"
                        },
                        new
                        {
                            Id = -4,
                            Hex = "#00FF00",
                            Name = "Зеленый"
                        },
                        new
                        {
                            Id = -5,
                            Hex = "#0000FF",
                            Name = "Синий"
                        },
                        new
                        {
                            Id = -6,
                            Hex = "#FFFF00",
                            Name = "Желтый"
                        },
                        new
                        {
                            Id = -7,
                            Hex = "#00FFFF",
                            Name = "Бирюзовый"
                        },
                        new
                        {
                            Id = -8,
                            Hex = "#FF00FF",
                            Name = "Малиновый"
                        },
                        new
                        {
                            Id = -9,
                            Hex = "#C0C0C0",
                            Name = "Серебряный"
                        },
                        new
                        {
                            Id = -10,
                            Hex = "#808080",
                            Name = "Серый"
                        },
                        new
                        {
                            Id = -11,
                            Hex = "#800000",
                            Name = "Бордовый"
                        },
                        new
                        {
                            Id = -12,
                            Hex = "#808000",
                            Name = "Оливковый"
                        },
                        new
                        {
                            Id = -14,
                            Hex = "#800080",
                            Name = "Фиолетовый"
                        },
                        new
                        {
                            Id = -15,
                            Hex = "#008080",
                            Name = "Морской"
                        },
                        new
                        {
                            Id = -16,
                            Hex = "#000080",
                            Name = "Ультрамариновый"
                        });
                });

            modelBuilder.Entity("Project1.Models.Animals.Capybara", b =>
                {
                    b.HasBaseType("Project1.Models.Templates.Animal");

                    b.Property<int>("ColorId")
                        .HasColumnType("int");

                    b.Property<double>("Height")
                        .HasColumnType("double");

                    b.Property<int>("TangerineCount")
                        .HasColumnType("int");

                    b.Property<double>("Weight")
                        .HasColumnType("double");

                    b.ToTable("Animals", t =>
                        {
                            t.Property("ColorId")
                                .HasColumnName("Capybara_ColorId");

                            t.Property("Height")
                                .HasColumnName("Capybara_Height");

                            t.Property("Weight")
                                .HasColumnName("Capybara_Weight");
                        });

                    b.HasDiscriminator().HasValue("Capybara");
                });

            modelBuilder.Entity("Project1.Models.Animals.Cat", b =>
                {
                    b.HasBaseType("Project1.Models.Templates.Animal");

                    b.Property<int>("ColorId")
                        .HasColumnType("int");

                    b.Property<double>("Height")
                        .HasColumnType("double");

                    b.Property<double>("Weight")
                        .HasColumnType("double");

                    b.ToTable("Animals", t =>
                        {
                            t.Property("ColorId")
                                .HasColumnName("Cat_ColorId");
                        });

                    b.HasDiscriminator().HasValue("Cat");
                });

            modelBuilder.Entity("Project1.Models.Animals.Kiwi", b =>
                {
                    b.HasBaseType("Project1.Models.Templates.Animal");

                    b.Property<int>("KiwiEaten")
                        .HasColumnType("int");

                    b.Property<double>("Wingspan")
                        .HasColumnType("double");

                    b.HasDiscriminator().HasValue("Kiwi");
                });

            modelBuilder.Entity("Project1.Models.Animals.Shark", b =>
                {
                    b.HasBaseType("Project1.Models.Templates.Animal");

                    b.Property<int>("ColorId")
                        .HasColumnType("int");

                    b.Property<double>("Length")
                        .HasColumnType("double");

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
