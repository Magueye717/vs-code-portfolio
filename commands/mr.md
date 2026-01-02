🔍 Pre-Commit Validation
Before each commit, ask yourself:

✅ Files Check

git status
git diff --cached --name-only
Are these the right files to commit?

✅ Message Format Check
Format: type(TICKET-123): description #time XhYm

Quick Validation:

# Test your message
echo "feat(GPGT-123): your message #time 2h" | grep -E "^(feat|fix|docs|style|refactor|test|chore)\([A-Z]+-\d+\): .+ #time \d+[hm](\d+m)?$"
✅ 5-Second Checklist
Type? feat/fix/docs/style/refactor/test/chore

Ticket? XXX-12345 format

Description? Clear what changed

Time? #time XhYm format

Files? Only what's needed

Example:

✅ feat(GPGT-123): Add login endpoint #time 2h
❌ fix: Quick fix #time 30m