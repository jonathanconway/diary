const diaryconfig = require("../diaryconfig.json");

export interface Config {
  readonly diariesPath: string;
  readonly diariesTemplateFilename: string;
  readonly editor: string;
  readonly includeRepoName: boolean;
}

export const config = diaryconfig as Config;
