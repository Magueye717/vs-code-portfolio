Here's a comprehensive mr.md file for your commands folder:


# Merge Request Guidelines & Commit Rules

## 📋 Before Creating a Merge Request

### 1. Commit Validation Checklist
Ensure ALL commits in your MR follow this format:
type(TICKET-123): description #time XhYm


**Components Breakdown:**
- **type**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **TICKET-123**: Jira ticket number (e.g., GPGT-31277)
- **description**: Brief, specific description of changes
- **#time**: Time spent on this work (e.g., #time 2h, #time 30m, #time 1h30m)

### 2. Validate Your Commits
Run this command before creating MR to check all commits:
```bash
# Check last 5 commits
git log --oneline -5

# Validate format of specific commit
git show --name-only -s --format="%B" HEAD | head -3
🚀 Creating a Merge Request
Step-by-Step Process
Complete Development

bash
# Make sure all work is committed with proper format
git status
Push to Remote

bash
git push origin your-branch-name
Create MR via GitLab UI/API or use:

bash
# Using GitLab CLI if available
glab mr create --title "Your MR Title" --description "MR Description"
MR Title Format

[TICKET-123] Brief description of changes
Example: [GPGT-31277] Implement user authentication API

📝 MR Description Template

## Summary
<!-- Brief overview of changes -->

## Related Ticket(s)
- [TICKET-123](https://gozem.atlassian.net/browse/TICKET-123)

## Changes Made
### Type: feat/fix/docs/etc.
- Change 1 description
- Change 2 description

### Type: feat/fix/docs/etc.
- Change 1 description

## Time Breakdown
| Commit | Time Spent | Total |
|--------|------------|-------|
| feat(TICKET-123): First feature | 2h | 2h |
| fix(TICKET-123): Fix bug | 30m | 2h30m |
| Total | | 2h30m |

## Testing Performed
- [ ] Unit tests added/updated
- [ ] Integration tests
- [ ] Manual testing steps
  - Step 1
  - Step 2

## Deployment Notes
- [ ] Database migrations
- [ ] Environment variables
- [ ] Breaking changes

## Screenshots/Logs
<!-- If applicable -->
⚠️ Common Issues & Solutions
Issue: Invalid Commit Message in Pipeline
Symptoms:


❌ Invalid commit message format!
Required format: type(TICKET-123): description #time 2h
Solutions:

Amend last commit (not pushed):

bash
git commit --amend -m "feat(GPGT-123): Your description #time 2h"
Multiple commits need fixing:

bash
# Interactive rebase for last 3 commits
git rebase -i HEAD~3
# Mark commits with 'reword' to change messages
Already pushed:

bash
git commit --amend -m "feat(GPGT-123): Your description #time 2h"
git push --force-with-lease origin your-branch
Issue: Time Not Logged to Jira
Check:

Verify Jira ticket exists

Check pipeline logs for specific errors

Ensure you have permission to log work

🔧 Development Workflow Examples
Daily Development
bash
# Start new feature
git checkout -b feature/GPGT-123-user-auth

# After 2 hours work on login endpoint
git add .
git commit -m "feat(GPGT-123): Implement login endpoint #time 2h"

# After 30 minutes fixing validation
git add .
git commit -m "fix(GPGT-123): Fix password validation logic #time 30m"

# After 1 hour adding tests
git add .
git commit -m "test(GPGT-123): Add unit tests for login endpoint #time 1h"
Commit Types Guide
feat: New feature or enhancement

fix: Bug fix

docs: Documentation changes

refactor: Code restructuring (no behavior change)

test: Adding/updating tests

chore: Maintenance, dependencies, tooling

style: Code style/formatting (no logic change)

📊 Time Tracking Best Practices
What to Include:
✓ Actual coding time

✓ Research time

✓ Debugging time

✓ Code review time for complex changes

✓ Meeting/discussion time directly related to implementation

Examples:

docs(GPGT-123): Research OAuth2 implementation options #time 1h
feat(GPGT-123): Implement OAuth2 login flow #time 3h
test(GPGT-123): Add integration tests for OAuth2 #time 1h30m
🚨 Pipeline Validation Reminder
The pipeline will FAIL if:

❌ Missing ticket number

❌ Missing time tracking (#time)

❌ Incorrect format

❌ Missing description

Success looks like:


✅ Valid commit format detected
📋 Jira Ticket: GPGT-31277
⏱️ Time: 2h
📝 Logging time to Jira...
✅ Time logged successfully to GPGT-31277
📞 Getting Help
Check pipeline logs for detailed error messages

Validate format using examples above

Contact DevOps for system issues

Reference: GitLab CI Templates

Remember: Every commit = automatic Jira time log. Be accurate with your time tracking!



## 💡 Cursor Usage Tips

When using Cursor, you can:
1. Keep this file open as reference
2. Use Cursor's AI to help format commit messages:
/ask Format this commit: I fixed the login bug for ticket GPGT-123, took about 1.5 hours


3. Create custom Cursor commands that reference these rules

Would you like me to create any additional helper scripts or Cursor-specific configurations for enforcing these commit rules?