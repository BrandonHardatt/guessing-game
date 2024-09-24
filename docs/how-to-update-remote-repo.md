
# Updating the Remote Repository with Your Local Changes

#### Prerequisites


#### Step 1: Check the Status of Your Local Repository
Before committing changes, it's good practice to check the current status of your repository to see if any files have been modified, added, or deleted.

Run:
```bash
git status
```
This will show you the files that have been modified and are uncommitted.

#### Step 2: Add Changes to the Staging Area
Once you're ready to commit your changes, you'll need to add the modified or new files to the staging area. You can add individual files or all changes at once.

To stage all changes:
```bash
git add .
```

To stage specific files:
```bash
git add <file_name>
```

To stage all files:
```bash
git add .
```

#### Step 3: Commit Your Changes
After staging your changes, commit them with a descriptive message to explain what you've done. This makes it easier to track the history of your project.

Run:
```bash
git commit -m "Describe what changes you made"
```

#### Step 4: Push Changes to the Remote Repository
Once your changes are committed locally, the next step is to push them to the remote repository. The following command assumes your remote repository is named `origin` and you're working on the `main` branch.

Run:
```bash
git push origin main
```

#### Step 5: (Optional) Pull Changes from the Remote Repository
Before pushing, it's a good idea to pull the latest changes from the remote repository to ensure your local branch is up-to-date, especially if you've been working on multiple machines or collaborating with others in the future.

Run:
```bash
git pull origin main
```

### Common Troubleshooting Tips:
- **Error: "Updates were rejected because the remote contains work that you do not have locally":**
  - This happens when there are commits in the remote repository that your local branch doesn’t have. You should first run `git pull origin main` to synchronize your local branch with the remote one, resolve any conflicts if necessary, and then push again.
  
- **Committing Unstaged Changes:**
  - If you try to commit but haven’t staged your changes (i.e., you forget to run `git add`), Git will not include those changes in your commit. Always run `git status` to ensure everything is staged.

### One-liner
```bash
git add . && git commit -m "Adding audio player" && git push origin main
```

#### Recap:
1. `git status` — Check what files have changed.
2. `git add .` or `git add <file>` — Stage changes for commit.
3. `git commit -m "Your message"` — Commit your changes with a message.
4. `git push origin main` — Push changes to the remote repository.

---