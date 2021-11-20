using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repositories
{
    public class IMetContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Reaction> Reactions { get; set; }
        public DbSet<Interaction> Interactions { get; set; }

        public IMetContext(DbContextOptions<IMetContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Use Fluent API to configure  

            // Map entities to tables  
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Interaction>().ToTable("Interactions");

            // Configure Primary Keys  
            modelBuilder.Entity<User>().HasKey(u => u.UserId).HasName("user_id");
            modelBuilder.Entity<Interaction>().HasKey(u => u.InteractionId).HasName("interaction_id");

            // Configure indexes  
            //modelBuilder.Entity<User>().HasIndex(u => u.FirstName).HasDatabaseName("Idx_FirstName");
            //modelBuilder.Entity<User>().HasIndex(u => u.LastName).HasDatabaseName("Idx_LastName");

            // Configure columns  
            modelBuilder.Entity<User>().Property(u => u.UserId).HasColumnName("user_id").HasColumnType("int").UseMySqlIdentityColumn().IsRequired();
            modelBuilder.Entity<User>().Property(u => u.FirstName).HasColumnName("first_name").HasColumnType("varchar(64)").IsRequired();
            modelBuilder.Entity<User>().Property(u => u.LastName).HasColumnName("last_name").HasColumnType("varchar(64)").IsRequired();
            modelBuilder.Entity<User>().Property(u => u.Email).HasColumnName("email").HasColumnType("varchar(64)").IsRequired();
            modelBuilder.Entity<User>().Property(u => u.Created).HasColumnName("created").HasColumnType("datetime").IsRequired();
            modelBuilder.Entity<User>().Property(u => u.Deleted).HasColumnName("deleted").HasColumnType("datetime").IsRequired(false);

            modelBuilder.Entity<Interaction>().Property(u => u.InteractionId).HasColumnName("interaction_id").HasColumnType("bigint").UseMySqlIdentityColumn().IsRequired();
            modelBuilder.Entity<Interaction>().Property(u => u.Type).HasColumnName("type").HasColumnType("int").IsRequired();
            modelBuilder.Entity<Interaction>().Property(u => u.UserId).HasColumnName("user_id").HasColumnType("bigint").IsRequired();
            modelBuilder.Entity<Interaction>().Property(u => u.TargetId).HasColumnName("target_id").HasColumnType("bigint").IsRequired();
            modelBuilder.Entity<Interaction>().Property(u => u.Created).HasColumnName("created").HasColumnType("datetime").IsRequired();
            modelBuilder.Entity<Interaction>().Property(u => u.Deleted).HasColumnName("deleted").HasColumnType("datetime").IsRequired(false);

            modelBuilder.Entity<Reaction>().Property(u => u.ReactionId).HasColumnName("reaction_id").HasColumnType("bigint").UseMySqlIdentityColumn().IsRequired();
            modelBuilder.Entity<Reaction>().Property(u => u.Type).HasColumnName("type").HasColumnType("int").IsRequired();
            modelBuilder.Entity<Reaction>().Property(u => u.UserId).HasColumnName("user_id").HasColumnType("bigint").IsRequired();
            modelBuilder.Entity<Reaction>().Property(u => u.InteractionId).HasColumnName("interaction_id").HasColumnType("bigint").IsRequired();
            modelBuilder.Entity<Reaction>().Property(u => u.Created).HasColumnName("created").HasColumnType("datetime").IsRequired();
            modelBuilder.Entity<Reaction>().Property(u => u.Deleted).HasColumnName("deleted").HasColumnType("datetime").IsRequired(false);

            // Configure relationships  
            modelBuilder.Entity<Interaction>().HasOne(i => i.User).WithMany(u => u.Interactions).HasForeignKey(u => u.UserId);
        }

    }
}
