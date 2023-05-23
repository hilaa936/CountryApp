using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using CountryAPI.Models;

namespace CountryApp.API.Services
{
    public class CountryService
    {
        private readonly HttpClient _httpClient;

        public CountryService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<Country>> GetCountriesAsync()
        {
            var response = await _httpClient.GetAsync("https://restcountries.com/v2/all");
            if (response.IsSuccessStatusCode)
            {
                var json = await response.Content.ReadAsStringAsync();
                return Newtonsoft.Json.JsonConvert.DeserializeObject<List<Country>>(json);
            }

            // Handle the API failure scenario
            throw new Exception("Failed to fetch country data from the API.");
            // return Newtonsoft.Json.JsonConvert.DeserializeObject<List<Country>>(jsonMock);
        }
    }
}



// private static string jsonMock =
//     @"[{
//     'name': 'Afghanistan',
//     'capital': 'Kabul',
//     'region': 'Asia',
//     'subregion': 'Southern Asia',
//     'population': 27657145,
//     'area': 652230,
//     'flag': 'https://restcountries.com/data/afg.svg',
//     'currencies': [
//       {
//         'code': 'AFN',
//         'name': 'Afghan afghani',
//         'symbol': '؋'
//       }
//     ]
//   },
//   {
//     'name': 'Bahrain',
//     'capital': 'Manama',
//     'region': 'Asia',
//     'subregion': 'Western Asia',
//     'population': 1404900,
//     'area': 765,
//     'flag': 'https://restcountries.com/data/bhr.svg',
//     'currencies': [
//       {
//         'code': 'BHD',
//         'name': 'Bahraini dinar',
//         'symbol': '.د.ب'
//       }
//     ]
//   },
//   {
//     'name': 'Bangladesh',
//     'capital': 'Dhaka',
//     'region': 'Asia',
//     'subregion': 'Southern Asia',
//     'population': 161006790,
//     'area': 147570,
//     'flag': 'https://restcountries.com/data/bgd.svg',
//     'currencies': [
//       {
//         'code': 'BDT',
//         'name': 'Bangladeshi taka',
//         'symbol': '৳'
//       }
//     ]
//   },
//   {
//     'name': 'India',
//     'capital': 'New Delhi',
//     'region': 'Asia',
//     'subregion': 'Southern Asia',
//     'population': 1295210000,
//     'area': 3287590,
//     'flag': 'https://restcountries.com/data/ind.svg',
//     'currencies': [
//       {
//         'code': 'INR',
//         'name': 'Indian rupee',
//         'symbol': '₹'
//       }
//     ]
//   },
//   {
//     'name': 'Indonesia',
//     'capital': 'Jakarta',
//     'region': 'Asia',
//     'subregion': 'South-Eastern Asia',
//     'population': 258705000,
//     'area': 1904569,
//     'flag': 'https://restcountries.com/data/idn.svg',
//     'currencies': [
//       {
//         'code': 'IDR',
//         'name': 'Indonesian rupiah',
//         'symbol': 'Rp'
//       }
//     ]
// }]";
