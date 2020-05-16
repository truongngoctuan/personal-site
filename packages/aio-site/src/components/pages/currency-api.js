import axios from "axios";

const baseUrl = "https://poc-dashboard-currency.azurewebsites.net/api";
export async function getLatestCurrency(currencyCode) {
  return getLatestAUDCurrency();
}

async function getLatestAUDCurrency() {
  return axios
    .get(`${baseUrl}/currencylatestvaluegetteraction?currencyCode=AUD`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
