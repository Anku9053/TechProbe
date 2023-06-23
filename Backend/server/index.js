const express = require("express");
// const OPENAI_API_KEY = "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";
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
require("dotenv").config()
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());

app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({
    message: "pong",
  });
});
app.post("/chat", (req, res) => {
 
  const question = req.body.question;

  const statmsg = `Give 5 interview questions related to ${question}`

  openai
    .createCompletion({
      model: "text-davinci-003",
      prompt: statmsg,
      max_tokens: 4000,
      temperature: 0,
    })
    .then((response) => {
      console.log({ response });
      return response?.data?.choices?.[0]?.text;
    })
    .then((answer) => {
      console.log({ answer });
      const array = answer
        ?.split("\n")
        .filter((value) => value)
        .map((value) => value.trim());

      return array;
    })
    .then((answer) => {
      res.json({
        answer: answer,
        propt: statmsg,
      });
    });
  console.log({ statmsg });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});