#! /usr/bin/env node

import { diary } from "./diary";
import { branch } from "./branch";

const args = process.argv.slice(2);

if ([undefined, "create", "cr", "c"].includes(args[0])) {
  diary();
} else if (["branch", "br", "b"].includes(args[0])) {
  branch();
}
