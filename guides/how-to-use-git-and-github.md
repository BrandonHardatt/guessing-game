# Git & GitHub Tutorial

In this tutorial, we cover the basics of **Git** and **GitHub**, exploring key concepts, commands, and workflows. This guide is especially helpful for beginners.

### What is Git?
Git is a **version control system** that tracks changes to code over time. It allows developers to:
- Save and manage different versions of their code.
- Track changes, fix bugs, and revert to previous versions.

### Basic Concepts
- **Repository**: A project’s folder containing all files and code changes.
- **GitHub**: A web-based platform for hosting Git repositories, facilitating collaboration.

### Key Git Commands
- **Clone**: Downloads a remote repository to your local machine.
- **Add**: Stages files for a commit.
- **Commit**: Saves changes to the local repository.
- **Push**: Uploads changes to a remote repository (e.g., GitHub).
- **Pull**: Retrieves changes from a remote repository.
- **Branching**: Enables working on different features without affecting the main codebase.
- **Merge**: Combines changes from different branches.
- **Forking**: Copies a repository to your account, allowing you to modify without affecting the original.

### Using Git Locally
1. **Initialize** a local repository: `git init`.
2. **Add and Commit** files: Use `git add` to stage and `git commit` to save.
3. **Push changes** to GitHub: Connect to GitHub with `git push origin main`.
4. **Pull changes**: Sync local and remote changes using `git pull`.

### Working with Branches
- Create a new branch: `git checkout -b <branch-name>`.
- Switch between branches: `git checkout <branch-name>`.
- Merge changes: `git merge <branch-name>`.

### Handling Merge Conflicts
When merging, Git may encounter conflicts, requiring manual resolution. This can be done in a code editor or via the terminal.

### SSH Keys for GitHub Authentication
- Generate a key with `ssh-keygen`, and connect it to your GitHub account.

### Forking and Pull Requests
- **Fork** a repository to create a personal copy.
- **Pull Requests** allow proposing changes to the original repository.

### Common Commands for Git

Here’s a list of commonly used Git commands:

- Initialize a new Git repository: `git init`
- Add all files to the staging area.: `git add .`
-  Commit staged files with a message: `git commit -m "message"`
-  Check the status of your working directory and staging area: `git status`
-  Push your commits to the remote repository: `git push`
-  Fetch and merge changes from the remote repository to your local copy: `git pull`
-  Clone an existing GitHub repository to your local machine: `git clone <repo_url>`

### Done!
This tutorial covers the essential aspects of Git and GitHub. By learning these commands and workflows, you can efficiently manage projects, collaborate with others, and contribute to open-source repositories.

--- 
