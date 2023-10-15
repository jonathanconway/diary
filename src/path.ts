import { DateTime } from "luxon";
import { join } from "path";
import { homedir } from "os";
import { existsSync } from "fs";

import { config } from "./config";

export function getDiariesPath() {
  const { diariesPath } = config;
  return join(homedir(), diariesPath);
}

const diariesPath = getDiariesPath();

export function getDiaryTemplatePathFilename() {
  return `${diariesPath}/DiaryTemplate.md`;
}

function getTemplatePathFilenameCurrentWeekday() {
  return `${diariesPath}/DiaryTemplate_${getCurrentWeekday()}.md`;
}

function getCurrentWeekday() {
  return DateTime.fromJSDate(new Date()).toFormat("ccc");
}

function getCurrentTimeOfDay() {
  return DateTime.fromJSDate(new Date()).toFormat("a");
}

function getTemplatePathFilenameCurrentWeekdayTimeOfDay() {
  return `${diariesPath}/DiaryTemplate_${getCurrentWeekday()}_${getCurrentTimeOfDay()}.md`;
}

export function getTodaysDiaryTemplatePathName() {
  const seekDiaryPathNames = [
    getTemplatePathFilenameCurrentWeekdayTimeOfDay(),
    getTemplatePathFilenameCurrentWeekday(),
    getDiaryTemplatePathFilename(),
  ];

  for (const seekDiaryPathName of seekDiaryPathNames) {
    if (existsSync(seekDiaryPathName)) {
      return seekDiaryPathName;
    }
  }

  return seekDiaryPathNames.pop() as string;
}
