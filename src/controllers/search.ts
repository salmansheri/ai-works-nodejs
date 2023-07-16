import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export const searchProducts = async (product: string) => {
  const options = {
    method: "GET",
    url: "https://amazon-web-scraping-api.p.rapidapi.com/products/search",
    params: {
      criteria: product,
      page: "1",
      countryCode: "US",
      languageCode: "EN",
    },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY as string,
      "X-RapidAPI-Host": process.env.API_URL as string,
    },
  };
  const response = await axios.request(options);
  console.log(response.data);
  return response.data;
};
