if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.use(express.static("public"));

const api_key = process.env.API_KEY;

app.get("/dinoname", async (req, res) => {
  try {
    const fetchApi = await fetch(
      "https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": api_key,
          "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com",
        },
      }
    );

    const dinoNameResult = await fetchApi.json();
    res.json(dinoNameResult);
  } catch (error) {
    console.log(error);
  }
});

app.get("/dinoimage", async (req, res) => {
  try {
    const fetchApi = await fetch(
      "https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=20",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": api_key,
          "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
        },
      }
    );

    const dinoImageResult = await fetchApi.json();
    res.json(dinoImageResult);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
