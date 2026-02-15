---
description: "Run full verification suite: lint, build, and type-check the project."
---

# Verification

Run the complete verification suite to confirm the project is in a healthy state.

## Steps

1. **Lint**: Run `npm run lint` and report any warnings or errors
2. **Build**: Run `npm run build` and confirm exit code 0
3. **Type Check**: Run `npx tsc --noEmit` if available

## Reporting

For each step, report:
- Command run
- Exit code
- Any warnings or errors (with file paths and line numbers)
- Overall pass/fail status

## Rules

- Run ALL steps, even if an earlier step fails
- Report the full output - do not summarize away errors
- Do not claim success unless ALL steps pass with zero errors
- If any step fails, suggest specific fixes
