import axios from "axios";

const baseUrl = "http://poc-crawler-currency.azurewebsites.net/api";
export async function getLatestCurrency(currencyCode) {
  return getLatestAUDCurrency();
}

async function getLatestAUDCurrency() {
  return axios
    .get(`${baseUrl}/GoogleAudCurrency`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
