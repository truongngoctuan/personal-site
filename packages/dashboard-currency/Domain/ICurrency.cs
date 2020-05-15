namespace dashboard_currency.Domain
{
    public interface ICurrency
    {
        public string CurrencyCode { get; set; }
        public decimal Value { get; set; }
    }
}
