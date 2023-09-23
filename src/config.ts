const diaryconfig = require("../diaryconfig.json");

export interface Config {
  readonly diariesPath: string;
}

export const config = diaryconfig;
