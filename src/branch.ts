import { DateTime } from "luxon";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { homedir } from "os";
import { simpleGit } from "simple-git";

import { config } from "./config";
import { open } from "./open";

const git = simpleGit({
  baseDir: process.cwd(),
});

export async function branch() {
  const { current: currentBranch } = await git.branch();

  const { diariesPath } = config;
  const homeDiariesPath = join(homedir(), diariesPath);
  const dateString = DateTime.fromJSDate(new Date()).toFormat("yyyyMMdd");
  const diaryPathName = join(homeDiariesPath, `/${dateString}.md`);

  const diaryContent = readFileSync(diaryPathName).toString();

  const newDiaryContent = `${diaryContent}
  
## ${currentBranch}

-`;

  writeFileSync(diaryPathName, newDiaryContent);

  open(diaryPathName);
}
