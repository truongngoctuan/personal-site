import axios from "axios";
const baseUrl = "localhost:5002";
export async function getList() {
  return axios
    .get(`${baseUrl}/novels`)
    .then((response) => response.data) // parse JSON from request
    .catch((err) => {
      console.log(err);
      return null;
    });
}

export async function getByCodeName(codeName) {
  return axios
    .get(`${baseUrl}/novels/${codeName}`)
    .then((response) => response.data) // parse JSON from request
    .catch((err) => {
      console.log(err);
      return null;
    });
}
