import { existsSync, readFileSync, writeFileSync } from "fs";
import { render } from "ejs";
import { getTodaysDiaryTemplatePathName } from "./path";

const TEMPLATE_DEFAULT_TEMPLATE = `# <%= (new Date()).toLocaleDateString() %>

## Todo

- 
`;

export function createDiaryTemplate() {
  writeFileSync(
    getTodaysDiaryTemplatePathName(),
    getDiaryTemplate() ?? TEMPLATE_DEFAULT_TEMPLATE
  );
}

export function createDiaryTemplateIfNotExist() {
  if (!existsSync(getTodaysDiaryTemplatePathName())) {
    createDiaryTemplate();
  }
}

export function getDiaryTemplate() {
  const diaryTemplatetPath = getTodaysDiaryTemplatePathName();
  if (existsSync(diaryTemplatetPath)) {
    return readFileSync(diaryTemplatetPath).toString();
  }
  return TEMPLATE_DEFAULT_TEMPLATE;
}

export function renderDiaryTemplate(diaryTemplate: string) {
  return render(diaryTemplate);
}
