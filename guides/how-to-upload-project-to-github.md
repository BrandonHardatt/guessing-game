# How to Upload Your Project to GitHub

This guide will walk you through the steps required to create a new project and upload it to GitHub. This is aimed at new developers who are unfamiliar with Git and GitHub.

## Prerequisites

- [ ] *Installed a package manager on your system*. We are going to be installing git via your package manager so please make sure you have completed the guide on how to install package managers. 

<a href="how-to-install-package-managers.md" style="display: inline-block; padding: 5px 10px; font-size: 14px; font-weight: bold; color: white; background-color: #007bff; text-decoration: none; border-radius: 5px;">Installing Package Manager Guide</a>


- [ ] *Git installed on your system*. Now that you have a package manager it is very simple to install git open your systems **cli**:
- For **Windows**:`choco install git`
- For **macOS**: `brew install git`

- [ ] *Github Account*. If you don’t have one, you can sign up at [GitHub.com](https://github.com/).

## Steps to Upload a Project to GitHub

### 1. Change the default branch 
1. Go to [GitHub](https://github.com) and log in to your account.
2. Click on your **profile icon** and navigate into **Settings** under **Repositories** set the **Repository default branch** as **main**. 

### 2. Generate a Personal Access Token

Since GitHub removed password-based authentication, you'll need to use a **Personal Access Token** or SSH keys to push to your repository.

1. To set up a Personal Access Token, follow [GitHub's guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

2. If you prefer SSH, follow [this guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

### 3. Create a Repository on GitHub

1. Go to [GitHub](https://github.com) and log in to your account.
2. Click on your **profile icon** and navigate into **Your repositories**
3. Click on the **Repositories** section.
4. Click on the **New** button.
5. Enter a **repository name** (e.g., `my-first-project`).
6. You can add a description if you'd like.
7. Choose whether you want your repository to be **Public** (anyone can see it) or **Private** (only you and collaborators can see it).
8. (Optional) Check the box for **Initialize this repository with a README** if you want GitHub to create a README file automatically.
9. (Optional) Choose a license if you want GitHub to create a license file automatically.
10. Click **Create repository**.

### 4. Initialize Git in Your Project Directory

1. Open your **cli**.
2. Navigate to your project directory using the `cd` command. For example:
   ```bash
   cd path/to/your/project
   ```
3. Initialize a local Git repository:
   ```bash
   git init
   ```
   This creates a hidden `.git` folder in your project, making it a Git repository.

### 5. Create a .gitignore File
React Native projects include a lot of files that shouldn’t be tracked by Git, such as node_modules, build artifacts, and more. You need to create a .gitignore file to tell Git which files and directories to ignore.

1. Create the .gitignore file: 
``` bash
touch .gitignore
```

We need to open this file but it is a hidden file.  

2. Enable Viewing Hidden Files in Graphical File Explorers
- MacOS Finder:
Press Command + Shift + . (period) to toggle the visibility of hidden files.
- Windows File Explorer:
Go to the View tab and check the box labeled Hidden items to display hidden files.

3. Open the **.gitignore** file in **vs code**.
Here are the typical content for a React Native project:
```bash
# Node modules
node_modules/

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# React Native
ios/Pods/
android/.gradle/
android/app/build/

# Build artifacts
build/
.expo/
dist/

# Metro
.expo/
.expo-shared/

# Misc
.DS_Store
.env
.env.*
```

### 6. Add Files to Git

1. Add all your project files to Git's staging area:
   ```bash
   git add .
   ```
   The `.` adds all files in your project directory. You can add specific files by replacing `.` with the filename.

2. Commit the files with a message:
   ```bash
   git commit -m "Adding local folder"
   ```

### 7. Link Your Local Repository to GitHub

1. Go back to the repository page you just created on GitHub.
2. Copy the **repository URL** from GitHub (it will look something like `https://github.com/username/my-first-project.git`).
3. In your terminal, link the local repository to GitHub:
   ```bash
   git remote add origin https://github.com/username/my-first-project.git
   ```


### 8. Synchronizing Your Local Branch with the Remote

Sometimes, when you initialize a repository locally and push it to GitHub, your local branch may not be fully synchronized with the remote branch. These commands will ensure everything is correctly aligned.

1. **Set the Upstream Branch**  
   This step ensures your local `main` branch tracks the remote `main` branch on GitHub.
   ```bash
   git branch --set-upstream-to=origin/main main
   ```

2. **Stash Local Changes (Recommended)**  
   If you have any uncommitted changes that are not ready to be committed yet, stash them temporarily. This saves your changes without committing them:
   ```bash
   git stash
   ```

3. **Pull and Rebase Changes from the Remote**  
   If there are any changes on GitHub that you don’t have locally, you need to pull them. Using the `--rebase` flag ensures that your changes are applied cleanly on top of the remote changes:
   ```bash
   git pull --rebase
   ```

4. **Apply the Stashed Changes (If Any)**  
   If you stashed changes in step 2, you can now reapply them to your working directory:
   ```bash
   git stash pop
   ```

5. **Increase Git Buffer Size (Recommended)**  
   If you are pushing a large amount of data or large files, increasing the Git buffer size helps avoid errors:
   ```bash
   git config --global http.postBuffer 524288000
   ```

### Explanation:
- **Setting the upstream branch** ensures Git knows which remote branch your local branch should follow.
- **Stashing** temporarily stores your work to avoid conflicts while syncing your branch.
- **Rebasing** helps create a cleaner history by replaying your local commits on top of the remote changes.
- **Increasing the Git buffer size** ensures that large pushes are handled without network errors.

---


### 9. Push Your Project to GitHub

1. Push your committed files to the default branch of the GitHub repository:
   ```bash
   git push -u origin main
   ```

### 10. Verify Your Project on GitHub

1. Go back to your GitHub repository in the browser and refresh the page.
2. You should see your files uploaded and ready!

---

## Common Commands for Git

Here’s a list of commonly used Git commands:

- `git init`: Initialize a new Git repository.
- `git add .`: Add all files to the staging area.
- `git commit -m "message"`: Commit staged files with a message.
- `git status`: Check the status of your working directory and staging area.
- `git push`: Push your commits to the remote repository.
- `git pull`: Fetch and merge changes from the remote repository to your local copy.
- `git clone <repo_url>`: Clone an existing GitHub repository to your local machine.

---
## Done!
You can now collaborate with others, track changes, and manage your project versions through Git and GitHub!

---
## Additional Resources

- [Official Git Documentation](https://git-scm.com/doc)
- [GitHub Learning Lab](https://lab.github.com/) for interactive Git and GitHub courses