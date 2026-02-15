---
description: "Perform a code review of recent changes against project standards."
---

# Code Review

Review recent changes against the project's quality standards.

## Review Process

1. **Identify Changes**: Run `git diff` to see all uncommitted changes, or `git log --oneline -10` to review recent commits
2. **Read Each Changed File**: Understand the full context, not just the diff

## Review Criteria

### Critical (must fix before merge)
- TypeScript errors or `any` types
- Broken functionality or missing error handling at system boundaries
- Security issues (XSS, injection, exposed secrets)
- Accessibility violations (missing ARIA labels, non-semantic HTML)
- SEO regressions (missing metadata, broken structured data)

### Important (should fix)
- Performance issues (unnecessary re-renders, unoptimized images)
- Mobile responsiveness problems
- Inconsistency with existing patterns in the codebase
- Missing `'use client'` directive on interactive components

### Suggestions (nice to have)
- Better naming or organization
- Opportunities to reuse existing components
- Minor style improvements

## Output Format
List findings grouped by severity. For each finding:
- **File:line** - Description of the issue
- **Suggestion** - How to fix it
