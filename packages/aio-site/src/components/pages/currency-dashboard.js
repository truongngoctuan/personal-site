import React, { useEffect } from "react";

import { Typography, Card, Divider } from "@material-ui/core";
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
      <Typography className="" variant="h2" color="primary">
        QUICK DASHBOARD
      </Typography>

      <div className="flex flex-row flex-wrap">
        <Card
          className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 m-2 py-4"
          elevation={2}
        >
          <Typography className="px-6" variant="h4" color="secondary">
            AUD to VND
          </Typography>
          <Divider></Divider>
          <Typography className="mt-2 px-6" variant="h2">
            {audValue}
          </Typography>
        </Card>
        <Card
          className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 m-2 py-4"
          elevation={2}
        >
          <Typography className="px-6" variant="h4" color="secondary">
            USD to VND
          </Typography>
          <Divider></Divider>
          <Typography className="mt-2 px-6" variant="h2">
            {usdValue}
          </Typography>
        </Card>
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
