const diaryconfig = require("../diaryconfig.json");

export interface Config {
  readonly diariesPath: string;
  readonly diariesTemplateFilename: string;
  readonly editor: string;
}

export const config = diaryconfig as Config;
