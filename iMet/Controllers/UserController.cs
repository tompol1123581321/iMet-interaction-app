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
using OryKratos;
using System.Net.Http;

namespace iMet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly IMetContext context;
        private readonly Client oryClient;

        public UserController(ILogger<UserController> logger, IMetContext context)
        {
            _logger = logger;
            this.context = context;
            
            oryClient = new Client();
        }

        [HttpPost("/register")]
        public async Task<bool> Register(UserRegistrationModel model)
        {
            var registred = await oryClient.RegisterUser(model.Email, model.Password);
            if (!registred)
            {
                return false;
            }

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
                LastName = model.LastName
            };

            await context.AddAsync(user);
            await context.SaveChangesAsync();
            return true;
        }

        [HttpPost("/login")]
        public async Task<string> Login(UserLoginModel model)
        {
            var existing = context.Users.SingleOrDefault(u => u.Email == model.Email);
            if (existing == null)
            {
                throw new Exception("User doesn't exist");
            }

            var token = await oryClient.LoginUser(model.Email, model.Password);
            return token;
        }
    }
}
