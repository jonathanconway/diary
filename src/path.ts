import { join } from "path";
import { homedir } from "os";

import { config } from "./config";

export function getDiariesPath() {
  const { diariesPath } = config;
  return join(homedir(), diariesPath);
}

export function getDiaryTemplatePath() {
  return `${getDiariesPath()}/DiaryTemplate.md`;
}
