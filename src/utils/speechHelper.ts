/**
 * Web Speech API wrapper for reading article aloud in Vietnamese
 */

export interface SpeechStatus {
  isPlaying: boolean;
  isPaused: boolean;
  currentParagraphIndex: number;
}

class SpeechReader {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private paragraphs: string[] = [];
  private currentIndex: number = 0;
  private onStatusChange: ((status: SpeechStatus) => void) | null = null;
  private isPaused: boolean = false;
  private isPlaying: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public setCallback(cb: (status: SpeechStatus) => void) {
    this.onStatusChange = cb;
  }

  private notify() {
    if (this.onStatusChange) {
      this.onStatusChange({
        isPlaying: this.isPlaying,
        isPaused: this.isPaused,
        currentParagraphIndex: this.currentIndex
      });
    }
  }

  public startReading(paragraphs: string[], startIndex: number = 0) {
    if (!this.synth) return;
    this.stop();
    this.paragraphs = paragraphs;
    this.currentIndex = Math.max(0, Math.min(startIndex, paragraphs.length - 1));
    this.isPlaying = true;
    this.isPaused = false;
    this.readCurrent();
  }

  private readCurrent() {
    if (!this.synth || this.currentIndex >= this.paragraphs.length || !this.isPlaying) {
      this.isPlaying = false;
      this.isPaused = false;
      this.notify();
      return;
    }

    const text = this.paragraphs[this.currentIndex];
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.95; // Natural measured storytelling pace

    // Try finding Vietnamese voice if available
    const voices = this.synth.getVoices();
    const viVoice = voices.find(v => v.lang.startsWith('vi') || v.lang.includes('VIE'));
    if (viVoice) {
      utterance.voice = viVoice;
    }

    utterance.onend = () => {
      if (this.isPlaying && !this.isPaused) {
        this.currentIndex++;
        this.notify();
        this.readCurrent();
      }
    };

    utterance.onerror = () => {
      this.isPlaying = false;
      this.isPaused = false;
      this.notify();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
    this.notify();
  }

  public pause() {
    if (!this.synth || !this.isPlaying) return;
    this.synth.pause();
    this.isPaused = true;
    this.notify();
  }

  public resume() {
    if (!this.synth || !this.isPaused) return;
    this.synth.resume();
    this.isPaused = false;
    this.notify();
  }

  public stop() {
    if (!this.synth) return;
    this.synth.cancel();
    this.isPlaying = false;
    this.isPaused = false;
    this.currentIndex = 0;
    this.notify();
  }
}

export const speechReader = new SpeechReader();
