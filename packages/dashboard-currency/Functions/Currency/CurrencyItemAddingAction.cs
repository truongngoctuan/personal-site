// Default URL for triggering event grid function in the local environment.
// http://localhost:7071/runtime/webhooks/EventGrid?functionName={functionname}
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.EventGrid.Models;
using Microsoft.Azure.WebJobs.Extensions.EventGrid;
using Microsoft.Extensions.Logging;
using dashboard_currency.Domain;
using System;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using dashboard_currency.Data;

namespace dashboard_currency.Functions
{
    public static class CurrencyItemAddingAction
    {
        [FunctionName("CurrencyItemAddingAction")]
        public async static Task Run([EventGridTrigger]EventGridEvent eventGridEvent, ILogger log)
        {
            try
            {
                log.LogInformation(eventGridEvent.EventType.ToString());
                log.LogInformation(eventGridEvent.Data.ToString());

                ICurrencyRepository currencyRepository = new CurrencyRepository();
                var eventData = (eventGridEvent.Data as JObject).ToObject<CrawlerCurrencyEvent>();
                await currencyRepository.AddAsync(eventData);
            }
            catch (Exception ex)
            {
                log.LogError("An error occurred: '{0}'", ex);
            }
        }
    }

    class CrawlerCurrencyEvent: ICurrency
    {
        public string CurrencyCode { get; set; }
        public decimal Value { get; set; } 
    }
}
