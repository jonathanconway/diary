#! /usr/bin/env node

import { diary } from "./diary";
import { branch } from "./branch";
import { add } from "./add";

const args = process.argv.slice(2);

switch (true) {
  case [undefined, "create", "cr", "c"].includes(args[0]): {
    diary();
    break;
  }
  case ["branch", "br", "b"].includes(args[0]): {
    branch();
    break;
  }
  case ["add", "a"].includes(args[0]): {
    add(args.slice(1));
    break;
  }
}
