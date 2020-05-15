using dashboard_currency.Domain;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace dashboard_currency.Data
{
    public class Currency: ICurrency
    {
        [BsonId]
        public ObjectId Id { get; set; } = new ObjectId(); // todo this is wrong if we want to apply orchrestator

        [BsonElement("currencyCode")]
        public string CurrencyCode { get; set; }
        [BsonElement("value")]
        public decimal Value { get; set; }
    }
}
