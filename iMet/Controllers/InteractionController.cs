using Contracts.Feed;
using Contracts.Interaction;
using Contracts.User;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Models;
using Repositories;
using System.Linq;

namespace iMet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InteractionController : ControllerBase
    {
        private readonly ILogger<InteractionController> _logger;
        private readonly IMetContext context;

        public InteractionController(ILogger<InteractionController> logger, IMetContext context)
        {
            _logger = logger;
            this.context = context;
        }

        [HttpGet("/new_interaction")]
        public FeedModel Post()
        {
            var interactions = context.Interactions
                .Include(i => i.User)
                .Include(i => i.Target)
                .ToList();

            var interactionsModel = interactions.Select(i => new InteractionModel
            {
                Id = i.InteractionId,
                Created = i.Created,
                Type = i.Type,
                User = GetUserModelData(i.User),
                Target = GetUserModelData(i.Target)
            }).ToList();

            return new FeedModel
            {
                Interactions = interactionsModel
            };
        }

        private UserModel GetUserModelData(User user)
        {
            return new UserModel
            {
                Id = user.UserId,
                DisplayName = $"{user.FirstName} {user.LastName}"
            };
        }
    }
}
