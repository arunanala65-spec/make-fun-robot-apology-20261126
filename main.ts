// The Robot Apology — make.fun
// Two-line robot confession: one sentence owning a specific mistake,
// one naming the lesson and the fix.
// Entry: make-fun-robot-apology-20261126

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "I am sorry I defrosted the freezer and thawed your grandmother's wedding cake along with it.\nI have learned that 'frost-free' is not a request for help, and from now on I check what is inside before I press start.";

if (text.length + 1 < 1 || text.length + 1 > 400) {
  throw new Error(`Entry file must be 1-400 characters, got ${text.length + 1}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
console.log(text);
