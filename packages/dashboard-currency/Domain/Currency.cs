
namespace dashboard_currency.Domain
{
    public class Currency: ICurrency
    {
        public string CurrencyCode { get; set; }
        public decimal Value { get; set; }
    }
}
