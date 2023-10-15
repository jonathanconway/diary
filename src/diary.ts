#! /usr/bin/env node

import { DateTime } from "luxon";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

import { getDiariesPath } from "./path";
import {
  createDiaryTemplateIfNotExist,
  getDiaryTemplate,
  renderDiaryTemplate,
} from "./template";
import { open } from "./open";

export function diary() {
  const diariesPath = getDiariesPath();
  if (!existsSync(diariesPath)) {
    mkdirSync(diariesPath, { recursive: true });
  }

  const dateString = DateTime.fromJSDate(new Date()).toFormat("yyyyMMdd");

  const diaryPathName = join(diariesPath, `/${dateString}.md`);

  createDiaryTemplateIfNotExist();
  const diaryEntry = renderDiaryTemplate(getDiaryTemplate());

  if (!existsSync(diaryPathName)) {
    writeFileSync(diaryPathName, diaryEntry);
  }

  open(diaryPathName);
}
