# How to setup up your development environment 

## Setting up your Windows development environment

### Prerequsite
- [ ] *Installed a package manager on your system*. We are going to be installing a variety of packages via your package manager so please make sure you have completed the guide on how to install your package manager. 

   <a href="how-to-install-package-managers.md" style="display: inline-block; padding: 5px 10px; font-size: 14px; font-weight: bold; color: white; background-color: #007bff; text-decoration: none; border-radius: 5px;">Package Manager Guide</a>

### 1. Install Visual Studio Code 

1. Use Chocolatey to install Visual Studio Code:
```bash
choco install vscode
```
2. Install recommended extensions: 
```bash
code --install-extension christian-kohler.path-intellisense dbaeumer.vscode-eslint dsznajder.es7-react-js-snippets infeng.vscode-react-typescript ms-python.debugpy ms-python.isort ms-python.python ms-python.vscode-pylance ms-vscode.js-debug-nightly ms-vscode.vscode-typescript-next msjsdiag.vscode-react-native pkief.material-icon-theme shd101wyy.markdown-preview-enhanced streetsidesoftware.code-spell-checker xabikos.javascriptsnippets zhang-renyang.vscode-react
```
3. Verify extensions with
```bash
code --list-extensions
```


### 2. Install Version Control (Git)

1. Use Chocolatey to install Git:
```bash
choco install git
```
2. Configure your name and email explicitly:
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 3. Setting up Github 
1. Sign up for a github account on their website.
<a href="https://github.com/" style="display: inline-block; padding: 5px 10px; font-size: 14px; font-weight: bold; color: white; background-color: #007bff; text-decoration: none; border-radius: 5px;">Github Signup</a>

2. Install GitHub CLI
```bash
choco install gh
```

### 4. Install Node.js (long-term support)
```bash
choco install nodejs-lts
```

### 5. Install Python

<a href="https://www.python.org/downloads/" style="display: inline-block; padding: 5px 10px; font-size: 14px; font-weight: bold; color: #f9df5c; background-color: #3570a0; text-decoration: none; border-radius: 5px;">Python Download Website</a>

**Check the box to set python to PATH!**

### 6. Done!
Now you're ready to start developing!
