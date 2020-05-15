using System.Threading.Tasks;

namespace dashboard_currency.Domain
{
    public interface ICurrencyRepository
    {
        Task AddAsync(ICurrency novel);
    }
}
