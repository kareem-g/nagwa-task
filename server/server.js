const express = require("express");
const app = express();

// Words Data
const words = [
  {
    id: 1,
    word: "slowly",
    pos: "adverb",
  },
  {
    id: 2,
    word: "ride",
    pos: "verb",
  },
  {
    id: 3,
    word: "bus",
    pos: "noun",
  },
  {
    id: 4,
    word: "commute",
    pos: "verb",
  },
  {
    id: 5,
    word: "emissions",
    pos: "noun",
  },
  {
    id: 6,
    word: "walk",
    pos: "verb",
  },
  {
    id: 7,
    word: "fast",
    pos: "adjective",
  },
  {
    id: 8,
    word: "car",
    pos: "noun",
  },
  {
    id: 9,
    word: "crowded",
    pos: "adjective",
  },
  {
    id: 10,
    word: "arrival",
    pos: "noun",
  },
  {
    id: 11,
    word: "emit",
    pos: "verb",
  },
  {
    id: 12,
    word: "independent",
    pos: "adjective",
  },
  {
    id: 13,
    word: "convenient",
    pos: "adjective",
  },
  {
    id: 14,
    word: "lane",
    pos: "noun",
  },
  {
    id: 15,
    word: "heavily",
    pos: "adverb",
  },
];
// Ranking Data
const rank = [
  20, 90, 100, 50, 10, 50, 60, 0, 60, 10, 90, 30, 100, 30, 20, 90, 40, 20, 10,
  60, 50, 100, 50, 80, 50, 80, 60, 80, 10, 40,
];

const filteredArray = words.filter(
  ({ pos }) =>
    pos === "adjective" || pos === "noun" || pos === "verb" || pos === "adverb"
);

console.log(filteredArray.length);

// const getRandomListOfTenObjects = filteredArray
//   .sort(() => Math.random() - Math.random())
//   .slice(0, 4);

// console.log(getRandomListOfTenObjects);

app.get("/words", (req, res) => {
  res.send(words);
});

app.get("/rank", (req, res) => {
  res.send(rank);
});

app.listen(5000, () => console.log("app listening on port 5000"));
