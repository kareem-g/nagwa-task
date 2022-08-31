import fs from "fs";
import path from "path";

//parsing data
const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/TestData.json"), "utf8")
);

const wordList = () => {
  const wordsList = data.wordList;
  return wordsList;
};

const scoresList = () => {
  return data.scoresList;
};

export { wordList, scoresList };
