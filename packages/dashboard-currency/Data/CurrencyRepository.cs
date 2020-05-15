using dashboard_currency.Domain;
using MongoDB.Driver;
using System.Threading.Tasks;

namespace dashboard_currency.Data
{
    public class CurrencyRepository: ICurrencyRepository
    {
        IMongoCollection<T> GetCollection<T>(string collectionName)
        {
            var client = new MongoClient(System.Environment.GetEnvironmentVariable("MongoConnectionString"));
            var database = client.GetDatabase("currency-dev");
            var collection = database.GetCollection<T>(collectionName);
            return collection;
        }

        public async Task AddAsync(ICurrency currency)
        {
            var collection = GetCollection<Currency>("latest-currencies");

            var data = new Currency
            {
                CurrencyCode = currency.CurrencyCode,
                Value = currency.Value
            };

            var filter = Builders<Currency>.Filter.Eq("currencyCode", currency.CurrencyCode);
            var update = Builders<Currency>.Update.Set("value", currency.Value);

            var indataCurrency = await collection.FindOneAndUpdateAsync(filter, update);
            if(indataCurrency == null)
            {
                await collection.InsertOneAsync(data);
            }
        }

        public async Task<ICurrency> GetAsync(string currencyCode)
        {
            var collection = GetCollection<Currency>("latest-currencies");

            var filter = Builders<Currency>.Filter.Eq("currencyCode", currencyCode);

            var indataCurrency = await collection.FindAsync<Currency>(filter);

            return ToCurrencyDomain(indataCurrency.FirstOrDefault());
        }

        Domain.Currency ToCurrencyDomain(Currency c)
        {
            return c == null ? null : new Domain.Currency
            {
                CurrencyCode = c.CurrencyCode,
                Value = c.Value
            };
        }
    }
}
