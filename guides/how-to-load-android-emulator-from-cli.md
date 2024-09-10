### Tutorial: Loading an Android Emulator from the Terminal

This guide will show you how to load an Android emulator using the terminal/command line on your system. By the end of this tutorial, you'll know how to run Android emulators directly from the terminal and ensure that relevant tools are available globally through your system's PATH environment.

#### Prerequisites:
- **Android Studio** installed with the Android SDK.
- **Android Virtual Device (AVD)** created using the AVD Manager.
  
#### 1. Navigate to the Emulator Directory

The Android SDK includes tools to manage and launch emulators. The executable files for emulators are located in the `emulator` folder of your Android SDK installation.

To navigate to the emulator directory, open a terminal/command prompt and run:

```bash
cd C:\Users\<YourUsername>\AppData\Local\Android\Sdk\emulator
```

- Replace `<YourUsername>` with your actual Windows username.
  
#### 2. List Available AVDs (Android Virtual Devices)

Once you are in the emulator directory, you can list all the available Android Virtual Devices (AVDs) using the following command:

```bash
emulator -list-avds
```

This command will output the names of all the virtual devices you have created. You'll need this name to launch a specific emulator.

#### 3. Launch the Emulator

To launch the emulator, use the following command:

```bash
emulator -avd <AVD_NAME>
```

- Replace `<AVD_NAME>` with the name of the virtual device you wish to launch. For example, if `Pixel_4_API_30` was listed by the `-list-avds` command, the launch command would be:

```bash
emulator -avd Pixel_4_API_30
```

Your emulator will now start!

#### 4. Add Emulator and Platform Tools to PATH

To make running `emulator` and `adb` (Android Debug Bridge) commands easier from anywhere in the terminal, add their directories to your system's PATH.

You need to add the following directories to your PATH:
- `platform-tools` (for `adb` command)
- `emulator` (for the `emulator` command)

##### Steps to Add Paths to System Environment Variables:

1. **Open System Properties**:
   - Right-click on `This PC` or `My Computer` and select **Properties**.
   - Click on **Advanced system settings** from the left panel.
   - In the **System Properties** window, click on **Environment Variables**.

2. **Edit the PATH variable**:
   - Under **System Variables**, find the `Path` variable and select it.
   - Click **Edit**.

3. **Add Android SDK Paths**:
   - Click **New** and add the following paths one by one:
   
     ```bash
     C:\Users\<YourUsername>\AppData\Local\Android\Sdk\platform-tools
     C:\Users\<YourUsername>\AppData\Local\Android\Sdk\emulator
     ```

     Make sure to replace `<YourUsername>` with your actual username.

4. **Save Changes**:
   - Click **OK** to close all dialogs and save the changes.

#### 5. Verify PATH Configuration

To verify that the paths are correctly set, open a new terminal and run:

```bash
adb --version
```

If `adb` is correctly added to the PATH, this command will display the version of the ADB tool.

Similarly, you can test the `emulator` command by running:

```bash
emulator -list-avds
```

This should list the available virtual devices without needing to navigate to the emulator directory.

### Conclusion

Now you can launch Android emulators from any terminal window without having to navigate to the SDK directory every time. You've also set up the `adb` tool for easy use. This setup will streamline your Android development process significantly!

