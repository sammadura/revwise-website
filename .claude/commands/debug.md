---
description: "Systematic debugging workflow for any technical issue - build failures, runtime errors, UI bugs."
---

# Systematic Debugging

Follow this four-phase process for any technical issue.

## Phase 1: Root Cause Investigation
- Read the full error message and stack trace carefully
- Reproduce the issue consistently
- Check recent changes (git diff) for potential causes
- Trace the data/control flow backward from the error

## Phase 2: Pattern Analysis
- Find similar working code in the codebase
- Compare the broken code against the working reference
- Identify all differences, not just the obvious one

## Phase 3: Hypothesis and Testing
- Form a specific, written hypothesis: "The error occurs because X"
- Test with the minimal possible change
- If the hypothesis is wrong, update it based on what you learned
- Do NOT shotgun-debug (making multiple changes hoping one works)

## Phase 4: Implementation
- Implement the single fix
- Run `npm run build` and `npm run lint` to verify
- Confirm no regressions in other areas
- Commit with a message explaining what was broken and why

## Escalation Rule
If 3+ fix attempts fail, stop patching. The issue likely signals a fundamental design problem. Step back and question the architecture before continuing.
