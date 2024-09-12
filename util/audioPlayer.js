import { Audio } from 'expo-av';

class AudioPlayer {
  constructor() {
    this.sound = new Audio.Sound(); 
  }

  async unload() {

  };

  // Method to load the sound file
  async load(filePath) {
    try {
      // If a sound is already loaded, unload it before loading a new one
      if (this.sound) {
        await this.sound.unloadAsync();
        this.sound = null;
      }

      // Load the new sound file
      this.sound = await Audio.Sound.createAsync(filePath);

      // Set playback status update to handle the end of playback
      this.sound.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate.bind(this));

      //console.log('Sound loaded successfully');
    } catch (error) {
      console.error('Error loading sound:', error);
    }
  }

  // Method to play the loaded sound
  async play() {
    if (this.sound) {
      try {
        await this.sound.playAsync();
        //console.log('Playing sound...');
      } catch (error) {
        //console.error('Error playing sound:', error);
      }
    } else {
      console.log('No sound object available. Load a sound first.');
    }
  }

  // Method to stop and unload the sound
  async stop() {
    if (this.sound) {
      try {
        await this.sound.stopAsync();
        await this.sound.unloadAsync();
        this.sound = null;
        //console.log('Sound stopped and unloaded.');
      } catch (error) {
        console.error('Error stopping/unloading sound:', error);
      }
    }
  }

  // Callback function for handling playback status updates
  async onPlaybackStatusUpdate(status) {
    if (status.didJustFinish) {
      //console.log('Sound finished playing.');
      await this.stop();  // Automatically stop and unload when the sound finishes
    }
  }

  async setAudioMode() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: false,
      });
    } catch (error) {
      console.error('Error setting audio mode:', error);
    }
  }

}

export const audioPlayer = new AudioPlayer();
