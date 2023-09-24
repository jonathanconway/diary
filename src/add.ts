import { readFileSync, writeFileSync } from "fs";
import { getTodaysDiaryPathName } from "./path";
import { diary } from "./diary";

export function add([heading]: string[]) {
  diary();

  const diaryPathName = getTodaysDiaryPathName();

  const diaryContent = readFileSync(diaryPathName).toString();

  const newDiaryContent = `${diaryContent}
  
## ${heading}

-

`;

  writeFileSync(diaryPathName, newDiaryContent);
}
