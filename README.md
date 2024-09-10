### Welcome to my React Native Expo App

Welcome to the repository! This guide will help you set up the app on your local development environment. Please follow the instructions carefully, especially regarding the Expo CLI setup, as the global installation of Expo CLI is no longer recommended.

### About

This is a simple guessing game where you enter a number, and the computer attempts to guess the number.

### How It Works
1. You enter a number between a defined range (e.g., 1-99).
2. The computer will try to guess your number.
3. You provide feedback after each guess, telling the computer if its guess is too high, too low, or correct.

### Technologies Used
- **JSX**: Game logic
- **JSX**: User interface

### Features
- Adaptive guessing algorithm for faster guesses.
- Simple, interactive interface.

### Future Enhancements
- Add a scoring system based on how quickly the computer guesses.
- Allow users to customize the range of numbers.

---

### Prerequisites

Before starting, ensure you have the following installed on your system:

1. **Node.js**: [Download and install Node.js](https://nodejs.org/).
2. **Git**: [Install Git](https://git-scm.com/) if you haven't already.
3. **Expo Go App**: Download the **Expo Go** app on your physical device (iOS/Android) for testing.
4. **Expo CLI (Project-Specific Installation)**: Instead of installing Expo CLI globally, we'll use a project-specific installation.

---

### Step 1: Clone the Repository

Start by cloning the project to your local machine:

```bash
git clone https://github.com/yourusername/your-repo-name.git
```

Navigate into the project directory:

```bash
cd your-repo-name
```

### Step 2: Install Dependencies

#### Install Expo CLI Locally

Expo CLI is now recommended to be installed **locally within your project** to avoid issues like the one described [here](https://www.reddit.com/r/reactnative/comments/17bsmou/error_the_global_expocli_package_has_been/). To do so:

1. First, install the `expo` package and other project dependencies by running:

   ```bash
   npm install
   ```

This installs the necessary Expo packages locally, including the CLI tools.

### Step 3: Run the App

Since Expo CLI is installed locally within your project, you'll use `npx` to invoke it:

```bash
npx expo start
```

This command will start the Expo development server and open **Expo DevTools** in your browser.

### Step 4: Viewing the App on a Device

1. **Android/iOS (Expo Go App)**:
   - Open the **Expo Go** app on your Android/iOS device.
   - Scan the QR code displayed in your terminal or **Expo DevTools**.
   - The app will load on your device.

2. **Web**:
   - You can also run the app in your browser by clicking the **Run on web** button in **Expo DevTools**.

---

## Building the App

For production, you can create standalone binaries for iOS and Android.

1. **Android**:
   ```bash
   npx expo build:android
   ```

2. **iOS** (Requires a Mac and Xcode):
   ```bash
   npx expo build:ios
   ```

For more information on the build process, refer to the official [Expo Build Documentation](https://docs.expo.dev/distribution/building-standalone-apps/).

---

## Troubleshooting

### 1. Global Expo CLI Deprecation

If you encounter the error regarding the deprecation of the globally installed Expo CLI it's because the global Expo CLI package is no longer supported. To resolve this:

- Make sure you are running Expo CLI through `npx`, as in:

  ```bash
  npx expo start
  ```

This ensures you're using the correct version installed locally for your project.

### 2. Metro Bundler not starting

If the Metro Bundler fails to start, try clearing the cache:

```bash
npx expo start -c
```

### 3. Emulator Not Working

- Ensure that **SVM Mode** or **Intel VT-x** is enabled in your BIOS for virtualization.
- Allocate at least **4GB of memory** when creating Android Virtual Devices (AVD) for smooth performance.

---

## Contributing

If you'd like to contribute to this project, feel free to submit a pull request or open an issue.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)

---

This README now reflects the best practices for managing and running the app, including handling the deprecated global Expo CLI installation. You should now be ready to collaborate and run the project locally!