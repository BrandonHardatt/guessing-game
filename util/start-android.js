const { exec } = require('child_process');

// Function to check if an emulator is running
function isEmulatorRunning(callback) {
  exec('adb devices', (err, stdout) => {
    if (err) {
      console.error('Error checking devices:', err);
      callback(false);
      return;
    }
    const devices = stdout.split('\n').slice(1).filter(line => line.trim() !== '');
    callback(devices.length > 0);
  });
}

// Function to start an emulator
function startEmulator(callback) {
  console.log('Starting Android Emulator...');
  exec('emulator -avd Medium_Phone_API_35', (err) => {
    if (err) {
      console.error('Error starting emulator:', err);
      callback(false);
      return;
    }
    callback(true);
  });
}

// Function to wait for the emulator to boot up
function waitForEmulator(callback) {
  console.log('Waiting for emulator to boot...');
  exec('adb wait-for-device', (err) => {
    if (err) {
      console.error('Error waiting for device:', err);
      callback(false);
      return;
    }
    callback(true);
  });
}

// Main function to start the process
function start() {
  isEmulatorRunning((isRunning) => {
    if (isRunning) {
      console.log('Emulator is already running. Starting Expo...');
      exec('expo start --android');
    } else {
      startEmulator((started) => {
        if (started) {
          waitForEmulator((ready) => {
            if (ready) {
              console.log('Emulator is ready. Starting Expo...');
              exec('expo start --android');
            }
          });
        }
      });
    }
  });
}

start();
