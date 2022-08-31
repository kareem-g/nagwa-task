import { Question, Questions } from "../models/question";
import express, { Request, Response } from "express";

const wordStore = new Questions();

const words = (app: express.Application) => {
  app.get("/words", showTenQuestions);
};

const showTenQuestions = async (_req: Request, res: Response) => {
  try {
    const questions = await wordStore.showTenRandom();
    res.header("Access-Control-Allow-Origin", "*");
    res.json(questions);
  } catch (err) {
    res.status(500);
    res.json(err);
  }
};

export default words;
