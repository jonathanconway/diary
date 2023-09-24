import { DateTime } from "luxon";
import { join } from "path";
import { homedir } from "os";
import { existsSync, mkdirSync } from "fs";

import { config } from "./config";

export function getDiariesPath() {
  const { diariesPath } = config;
  return join(homedir(), diariesPath);
}

export function getDiaryTemplatePath() {
  return `${getDiariesPath()}/DiaryTemplate.md`;
}

export function getTodaysDiaryPathName() {
  const diariesPath = getDiariesPath();
  if (!existsSync(diariesPath)) {
    mkdirSync(diariesPath, { recursive: true });
  }

  const dateString = DateTime.fromJSDate(new Date()).toFormat("yyyyMMdd");

  const diaryPathName = join(diariesPath, `/${dateString}.md`);

  return diaryPathName;
}
