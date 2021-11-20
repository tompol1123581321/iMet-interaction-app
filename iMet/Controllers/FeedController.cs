using Contracts.Feed;
using Contracts.Interaction;
using Contracts.User;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Repositories;
using System;
using System.Collections.Generic;
using System.Linq;

namespace iMet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FeedController : ControllerBase
    {
        private readonly ILogger<FeedController> _logger;
        private readonly IMetContext context;

        public FeedController(ILogger<FeedController> logger, IMetContext context)
        {
            _logger = logger;
            this.context = context;
        }

        [HttpGet("/interactions")]
        public FeedModel Get()
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
                User = new UserModel
                {
                    Id = i.User.UserId,
                    DisplayName = $"{i.User.FirstName} {i.User.LastName}"
                },
                Target = new UserModel
                {
                    Id = i.Target.UserId,
                    DisplayName = $"{i.Target.FirstName} {i.Target.LastName}"
                }
            }).ToList();

            return new FeedModel
            {
                Interactions = interactionsModel
            };
        }
    }
}
