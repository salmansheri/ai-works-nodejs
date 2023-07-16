import axios from "axios";

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
      "X-RapidAPI-Key": "339adaaa81msh3422bb667789a00p1dec77jsn157cc41087b6",
      "X-RapidAPI-Host": "amazon-web-scraping-api.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  console.log(response.data);
  return response.data;
};
