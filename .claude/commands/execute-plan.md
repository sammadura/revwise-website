---
description: "Execute an implementation plan in batches with review checkpoints."
---

# Execute Plan

Execute a previously written plan from `docs/plans/` in controlled batches.

## Step 1: Load and Review Plan
- Read the plan file from `docs/plans/`
- Review it critically - raise any concerns before starting
- If no plan exists, suggest running /write-plan first

## Step 2: Execute in Batches
Process 3 tasks per batch:

For each task:
1. Read the task requirements from the plan
2. Implement the changes following the plan's specifications
3. Run verification steps (`npm run lint`, `npm run build`)
4. Commit the changes with a clear message

## Step 3: Report After Each Batch
After completing a batch:
- Show what was implemented and verification output
- Note any deviations from the plan and why
- Say "Ready for feedback" and wait for user input

## Step 4: Continue
- Apply any feedback from the user
- Execute the next batch
- Repeat until all tasks are complete

## Step 5: Final Verification
After all tasks:
- Run full `npm run build` and `npm run lint`
- Verify all pages render without errors
- Summarize what was built and any remaining follow-ups

## Stop Conditions
Pause and ask the user if:
- A blocker is encountered mid-batch
- The plan has gaps or unclear instructions
- Verification fails repeatedly (3+ times)
- A task requires architectural changes not in the plan
