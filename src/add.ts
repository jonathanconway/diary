import { readFileSync, writeFileSync } from "fs";
import { getTodaysDiaryTemplatePathName } from "./path";
import { diary } from "./diary";
import { open } from "./open";

export function add([heading]: string[]) {
  diary();

  const diaryPathName = getTodaysDiaryTemplatePathName();

  const diaryContent = readFileSync(diaryPathName).toString();

  const newDiaryContent = `${diaryContent}
  
## ${heading}

-

`;

  writeFileSync(diaryPathName, newDiaryContent);

  open(diaryPathName);
}
