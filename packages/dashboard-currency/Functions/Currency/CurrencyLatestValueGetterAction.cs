using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using dashboard_currency.Domain;
using dashboard_currency.Data;

namespace dashboard_currency.Functions.Currency
{
    public static class CurrencyLatestValueGetterAction
    {
        [FunctionName("CurrencyLatestValueGetterAction")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");


            string currencyCode = req.Query["currencyCode"];

            ICurrencyRepository currencyRepository = new CurrencyRepository();
            var currency = await currencyRepository.GetAsync(currencyCode);

            var result = new CurrencyReturnValue
            {
                CurrencyCode = currency.CurrencyCode,
                Value = currency.Value
            };

            return new OkObjectResult(result);
        }
    }

    class CurrencyReturnValue: ICurrency
    {
        public string CurrencyCode { get; set; }
        public decimal Value { get; set; }
    }
}
