import { existsSync, readFileSync, writeFileSync } from "fs";
import { render } from "ejs";
import { getDiaryTemplatePath } from "./path";

const TEMPLATE_DEFAULT_TEMPLATE = `# <%= (new Date()).toLocaleDateString() %>

## Todo

- 
`;

export function createDiaryTemplate() {
  writeFileSync(
    getDiaryTemplatePath(),
    getDiaryTemplate() ?? TEMPLATE_DEFAULT_TEMPLATE
  );
}

export function createDiaryTemplateIfNotExist() {
  if (!existsSync(getDiaryTemplatePath())) {
    createDiaryTemplate();
  }
}

export function getDiaryTemplate() {
  const diaryTemplatetPath = getDiaryTemplatePath();
  if (existsSync(diaryTemplatetPath)) {
    return readFileSync(diaryTemplatetPath).toString();
  }
  return TEMPLATE_DEFAULT_TEMPLATE;
}

export function renderDiaryTemplate(diaryTemplate: string) {
  return render(diaryTemplate);
}
