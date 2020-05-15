using MongoDB.Driver;
using System.Threading.Tasks;

namespace dashboard_currency.Domain
{
    public class CurrencyRepository: ICurrencyRepository
    {
        IMongoCollection<T> GetCollection<T>(string collectionName)
        {
            var client = new MongoClient(System.Environment.GetEnvironmentVariable("MongoDBAtlasConnectionString"));
            var database = client.GetDatabase("currency-dev");
            var collection = database.GetCollection<T>(collectionName);
            return collection;
        }

        public async Task AddAsync(ICurrency novel)
        {
            var collection = GetCollection<Currency>("latest-currencies");

            var data = new Currency
            {
                CurrencyCode = novel.CurrencyCode,
                Value = novel.Value
            };

            await collection.InsertOneAsync(data);
        }
    }
}
