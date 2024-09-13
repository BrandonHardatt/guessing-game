import { Audio } from 'expo-av';

class AudioPlayer {
  constructor() {
    this.sound = null;
  }

  // Helper function to check if the sound is valid and has the necessary methods
  isSoundValid() {
    return this.sound !== null && 
           typeof this.sound.stopAsync === 'function' && 
           typeof this.sound.unloadAsync === 'function';
  }

  async load(filePath) {
    try {
      // Use helper function to check sound validity
      if (this.isSoundValid()) {
        await this.sound.stopAsync();
        await this.sound.unloadAsync();
      }

      const { sound } = await Audio.Sound.createAsync(filePath);
      this.sound = sound;
      this.sound.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
    } catch (error) {
      console.error('Error loading sound:', error);
    }
  }

  async play() {
    if (this.sound === null) {
      return;  // Early return if sound is not loaded
    }
    try {
      await this.sound.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }

  async stop() {
    // Use helper function to check sound validity
    if (!this.isSoundValid()) { return; }
    try {
      await this.sound.stopAsync();
      await this.sound.unloadAsync();
      this.sound = null;  // Reset the sound after unloading
    } catch (error) {
      console.error('Error stopping sound:', error);
    }
  }

  onPlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      // this.sound = null;  // Reset sound when it finishes playing
    }
  }
}

export const audioPlayer = new AudioPlayer();
