#!/bin/bash
# Session Start Hook - Ensures the project is ready for development
# This runs at the start of each Claude Code session

set -e

echo "=== Revwise Website Session Start ==="

# Check if node_modules exists, install if missing
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
else
  echo "Dependencies already installed."
fi

# Run a quick lint check to verify the project is healthy
echo "Running lint check..."
if npm run lint 2>&1; then
  echo "Lint: PASS"
else
  echo "Lint: WARNINGS (non-blocking)"
fi

# Verify the build works
echo "Running build check..."
if npm run build 2>&1; then
  echo "Build: PASS"
else
  echo "Build: FAIL - investigate before making changes"
  exit 1
fi

echo "=== Session ready ==="
