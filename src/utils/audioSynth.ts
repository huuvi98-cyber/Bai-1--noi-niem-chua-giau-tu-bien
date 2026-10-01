/**
 * Web Audio API synthesizer for realistic ambient ocean waves
 * Generates natural ocean surf rhythms without external audio files
 */

class OceanWaveSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private gainNode: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private lfoNode: OscillatorNode | null = null;
  private lfoGain: GainNode | null = null;

  public init() {
    if (this.ctx) return;
    const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioCtxClass();
  }

  public play() {
    if (this.isPlaying) return;
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const bufferSize = this.ctx.sampleRate * 4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Generate smooth pink-like noise
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.06;
      b6 = white * 0.115926;
    }

    this.noiseNode = this.ctx.createBufferSource();
    this.noiseNode.buffer = buffer;
    this.noiseNode.loop = true;

    // Filter to simulate underwater and surface wash
    this.filterNode = this.ctx.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.filterNode.frequency.setValueAtTime(320, this.ctx.currentTime);
    this.filterNode.Q.setValueAtTime(1.5, this.ctx.currentTime);

    // Master gain
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(0.35, this.ctx.currentTime + 3);

    // LFO for periodic wave swell (~8-second tide surge)
    this.lfoNode = this.ctx.createOscillator();
    this.lfoNode.type = 'sine';
    this.lfoNode.frequency.setValueAtTime(0.12, this.ctx.currentTime); // ~8.3s wave period

    this.lfoGain = this.ctx.createGain();
    this.lfoGain.gain.setValueAtTime(280, this.ctx.currentTime);

    // Connect LFO to filter frequency for swell effect
    this.lfoNode.connect(this.lfoGain);
    this.lfoGain.connect(this.filterNode.frequency);

    // Pipeline: Noise -> Filter -> Gain -> Destination
    this.noiseNode.connect(this.filterNode);
    this.filterNode.connect(this.gainNode);
    this.gainNode.connect(this.ctx.destination);

    this.noiseNode.start();
    this.lfoNode.start();
    this.isPlaying = true;
  }

  public stop() {
    if (!this.isPlaying || !this.ctx || !this.gainNode) return;
    try {
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);
      setTimeout(() => {
        if (this.noiseNode) {
          this.noiseNode.stop();
          this.noiseNode.disconnect();
          this.noiseNode = null;
        }
        if (this.lfoNode) {
          this.lfoNode.stop();
          this.lfoNode.disconnect();
          this.lfoNode = null;
        }
        this.isPlaying = false;
      }, 1600);
    } catch {
      this.isPlaying = false;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const oceanSynth = new OceanWaveSynthesizer();
