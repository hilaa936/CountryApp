using System;


namespace CountryAPI.Models
{
   public class Country
{
    public string Name { get; set; }
    public string Capital { get; set; }
    public string Region { get; set; }
    public string Subregion { get; set; }
    public int Population { get; set; }
    public double Area { get; set; }
    public string Flag { get; set; }
    public List<Currency> Currencies { get; set; }
}

public class Currency
{
    public string Code { get; set; }
    public string Name { get; set; }
    public string Symbol { get; set; }
}

}