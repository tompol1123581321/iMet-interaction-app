using Contracts.Feed;
using Contracts.Interaction;
using Contracts.User;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Models;
using Repositories;
using System;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace iMet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly IMetContext context;

        public UserController(ILogger<UserController> logger, IMetContext context)
        {
            _logger = logger;
            this.context = context;
        }

        [HttpPost("/register")]
        public async Task Register(UserRegistrationModel model)
        {
            var existing = context.Users.SingleOrDefault(u => u.Email == model.Email);
            if (existing != null)
            {
                throw new Exception("User already exists");
            }

            var user = new User
            {
                Created = DateTime.Now,
                Email = model.Email,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Password = GetPasswordHash(model.Password)
            };

            await context.AddAsync(user);
            await context.SaveChangesAsync();
        }

        [HttpPost("/login")]
        public Task<bool> Login(UserLoginModel model)
        {
            var existing = context.Users.SingleOrDefault(u => u.Email == model.Email);
            if (existing == null)
            {
                throw new Exception("User doesn't exist");
            }

            return Task.FromResult(IsPasswordValid(existing.Password, model.Password));
        }

        private string GetPasswordHash(string password)
        {
            byte[] salt;
            new RNGCryptoServiceProvider().GetBytes(salt = new byte[16]);
            var pbkdf2 = new Rfc2898DeriveBytes(password, salt, 100234);
            var hash = pbkdf2.GetBytes(20);
            var hashBytes = new byte[36];
            Array.Copy(salt, 0, hashBytes, 0, 16);
            Array.Copy(hash, 0, hashBytes, 16, 20);
            return Convert.ToBase64String(hashBytes);
        }

        private bool IsPasswordValid(string dbPassword, string password)
        {
            var hashBytes = Convert.FromBase64String(dbPassword);
            var salt = new byte[16];
            Array.Copy(hashBytes, 0, salt, 0, 16);
            var pbkdf2 = new Rfc2898DeriveBytes(password, salt, 100234);
            var hash = pbkdf2.GetBytes(20);
            /* Compare the results */
            for (int i = 0; i < 20; i++)
            {
                if (hashBytes[i + 16] != hash[i])
                {
                    return false;
                }
            }

            return true;
        }
    }
}
