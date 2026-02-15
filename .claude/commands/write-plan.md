---
description: "Create a detailed implementation plan with bite-sized tasks for a feature or change."
---

# Write Implementation Plan

Create a detailed, step-by-step implementation plan. Plans assume zero prior context.

## Plan Structure

Write the plan to `docs/plans/YYYY-MM-DD-<feature-name>.md` with this format:

### Header
- **Feature name** and one-sentence goal
- **Architecture overview** (2-3 sentences)
- **Tech stack notes** (which existing patterns/components to leverage)

### Tasks
Break into granular tasks (2-5 minute increments each). For each task:

1. **What**: Specific action with exact file paths
2. **How**: Key implementation details, not just "implement X"
3. **Verify**: How to confirm it works (build, lint, visual check)
4. **Commit**: What to commit after this step

### Task Ordering Principles
- Start with data/types, then logic, then UI, then polish
- Each task should leave the app in a buildable state
- Group related changes that must ship together

### Guiding Principles
- **DRY**: Don't repeat yourself - reuse existing components and patterns
- **YAGNI**: Only build what's needed now, not hypothetical future needs
- **TDD**: Where testable, write the test expectation first
- **Frequent commits**: One commit per meaningful unit of work

## After Planning
Present the plan to the user for review. Offer to execute with /execute-plan after approval.
