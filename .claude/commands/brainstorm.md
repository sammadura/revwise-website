---
description: "Explore requirements and design before implementation. Use before any creative work - creating features, building components, adding functionality, or modifying behavior."
---

# Brainstorming Session

Before writing any code, follow this structured design process:

## Step 1: Explore Context
- Review existing files related to the request
- Understand the current architecture and patterns in use
- Check CLAUDE.md for project conventions

## Step 2: Ask Clarifying Questions
- Ask one question at a time using the AskUserQuestion tool
- Offer multiple-choice options when possible
- Cover: scope, constraints, design preferences, edge cases

## Step 3: Propose Approaches
Present 2-3 approaches with clear trade-offs:
- **Approach A**: [description] - Pros/Cons
- **Approach B**: [description] - Pros/Cons
- **Recommended**: [which and why]

## Step 4: Present Design
Break the design into sections scaled to complexity:
- For simple changes: component structure + key decisions
- For features: architecture, component tree, data flow, styling approach
- Request user approval before proceeding

## Step 5: Document the Plan
Write the approved design to `docs/plans/YYYY-MM-DD-<topic>-design.md`

## Step 6: Transition to Planning
After design approval, invoke the /write-plan command to create an implementation plan.

**IMPORTANT**: Do NOT write any implementation code until the user has approved the design.
