# How to Install Popular Package Managers

This guide will walk you through the process of installing popular package managers on **Windows** and **macOS**. These package managers simplify the installation of software and dependencies.

---

## Installing Chocolatey (Windows)

**Chocolatey** is a package manager for Windows that makes it easy to install and manage software from the command line.

1. Open **PowerShell** as Administrator:
   - Press the `Windows` key, type **PowerShell**.
   - Right-click **Windows PowerShell** and select **Run as Administrator**.

2. Check the current execution policy by running the following command:
```bash
Get-ExecutionPolicy
```

3. If the command returns `Restricted`, you need to change it. You can either use the **Bypass** policy (which is easier for installations) or the **AllSigned** policy (which is more secure):
   - To use **Bypass**:
```bash
Set-ExecutionPolicy Bypass -Scope Process
```
   - To use **AllSigned**:
```bash
Set-ExecutionPolicy AllSigned
```

With PowerShell's execution policy configured we can ensures that we can run the necessary installation scripts for Chocolatey

4. Run the following command to install Chocolatey:
```bash 
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
5. Import the PowerShell module provided by Chocolatey that contains helper functions. 
```bash
Import-Module $env:ChocolateyInstall\helpers\chocolateyProfile.psm1
```

6. The module we just imported has a helper function that will allow us to refresh PowerShell. 
```bash
refreshenv
```

6. To verify that Chocolatey was installed correctly, run:
```bash
choco -v
```
You should see the version number of Chocolatey, which confirms that the installation was successful.

### Installing Software Using Chocolatey
Once Chocolatey is installed, you can easily install software packages. 
```bash
choco install <package-name>
```

This will automatically download and install the package on your machine. 

---

## Installing Homebrew (macOS)

**Homebrew** is a popular package manager for macOS that simplifies the installation of software from the command line.

1. Open the **Terminal** app on your Mac.
2. Paste the following command to install Homebrew:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

3. Follow the on-screen instructions to complete the installation. It will also prompt you to install Xcode Command Line Tools if they are not already installed.

4. After the installation is complete, verify that Homebrew is installed by running:
```bash
brew --version
```
You should see the version number of Homebrew, which confirms that the installation was successful.

### Installing Software Using Homebrew
To install software using Homebrew, use the following syntax. For example, to install Git:
```bash
brew install <package-name>
```

This will automatically download and install the package on your Mac.

---
## Done!

You can now install a variety of packages easily from the **cli** with these package managers making your development workflow more efficient!

---

### Additional Resources:
- [Chocolatey Documentation](https://docs.chocolatey.org/)
- [Homebrew Documentation](https://brew.sh/)

---