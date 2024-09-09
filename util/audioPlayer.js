import { Audio } from 'expo-av';

class AudioPlayer {
  constructor() {
    this.soundObject = null; // The sound object representing the audio
  }

  // Method to load the sound file
  async load(filePath) {
    try {
      // If a sound is already loaded, unload it before loading a new one
      if (this.soundObject) {
        await this.soundObject.unloadAsync();
        this.soundObject = null;
      }

      // Load the new sound file
      const { sound } = await Audio.Sound.createAsync(filePath);
      this.soundObject = sound;

      // Set playback status update to handle the end of playback
      this.soundObject.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate.bind(this));

      console.log('Sound loaded successfully');
    } catch (error) {
      console.error('Error loading sound:', error);
    }
  }

  // Method to play the loaded sound
  async play() {
    if (this.soundObject) {
      try {
        await this.soundObject.playAsync();
        console.log('Playing sound...');
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    } else {
      console.log('No sound object available. Load a sound first.');
    }
  }

  // Method to stop and unload the sound
  async stop() {
    if (this.soundObject) {
      try {
        await this.soundObject.stopAsync();
        await this.soundObject.unloadAsync();
        this.soundObject = null;
        console.log('Sound stopped and unloaded.');
      } catch (error) {
        console.error('Error stopping/unloading sound:', error);
      }
    }
  }

  // Callback function for handling playback status updates
  async onPlaybackStatusUpdate(status) {
    if (status.didJustFinish) {
      console.log('Sound finished playing.');
      await this.stop();  // Automatically stop and unload when the sound finishes
    }
  }
}

export const audioPlayer = new AudioPlayer();
