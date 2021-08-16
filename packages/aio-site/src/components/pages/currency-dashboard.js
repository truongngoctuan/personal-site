import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLatestCurrency } from "./currency-api";

function formatCurrency(currency, number) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return formatter.format(number); /* $2,500.00 */
}

const CurrencyDashboardPageContent = ({ currencies, setCurrency }) => {
  const audValue = currencies["AUD"] ? formatCurrency("VND", currencies["AUD"]) : "Loading";
  const usdValue = currencies["USD"] ? formatCurrency("VND", currencies["USD"]) : "Loading";;

  useEffect(() => {
    const currencyCode = "AUD";
    getLatestCurrency(currencyCode).then((resultData) => {
      setCurrency(currencyCode, resultData.value);
    });
  }, []);
  return (
    <div>
      <h2>
        QUICK DASHBOARD
      </h2>

      <div className="flex flex-row flex-wrap">
        <div
          className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 m-2 py-4 shadow-lg bg-white rounded-lg"
        >
          <h4 className="px-6">
            AUD to VND
          </h4>
          <h2 className="mt-2 px-6">
            {audValue}
          </h2>
        </div>
        <div
          className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 m-2 py-4 shadow-lg bg-white rounded-lg"
        >
          <h4 className="px-6">
            USD to VND
          </h4>
          <h2 className="mt-2 px-6">
            {usdValue}
          </h2>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ dashboardCurrencies }) => {
  return { currencies: dashboardCurrencies };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrency: (currencyCode, value) =>
      dispatch({
        type: `DASHBOARD-CURRENCY-GET`,
        data: { currencyCode, value },
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyDashboardPageContent);
