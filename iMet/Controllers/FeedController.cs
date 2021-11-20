using Microsoft.AspNetCore.Mvc;
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

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var users = context.Users.ToList();
            return null;
        }
    }
}
