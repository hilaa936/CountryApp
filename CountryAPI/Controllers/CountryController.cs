using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using CountryApp.API.Services;
using CountryAPI.Models;

namespace CountryApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CountryController : ControllerBase
    {
        const string REGION_ASIA = "Asia";
        private readonly IMemoryCache _cache;
        private readonly CountryService _countryService;

        public CountryController(IMemoryCache cache, CountryService countryService)
        {
            _cache = cache;
            _countryService = countryService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            List<Country> countries;

            if (!_cache.TryGetValue("Countries", out countries))
            {
                countries = _countryService.GetCountriesAsync().Result;

                _cache.Set("Countries", countries, TimeSpan.FromHours(1));
            }

            var asiaCountries = countries.Where(c => c.Region == REGION_ASIA).ToList();
            return Ok(asiaCountries);
        }
    }
}
