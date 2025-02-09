// src/utils/tts.js
import "@fortawesome/fontawesome-free/css/all.min.css"; // Use Font Awesome icons
import "./tts.css"; // Optional if you need any additional styling

class TTS {
  constructor() {
    this.speech = new SpeechSynthesisUtterance();
    this.speech.lang = "en-US"; // Default language (English)
    this.speech.rate = 1.0;     // Default speed

    this.isPlaying = false;     // True if TTS is actively playing or paused (not finished)
    this.isPaused = false;      // True if user explicitly paused
    this.selectedText = "";
    this.currentOffset = 0;     // Track progress in text

    // Create a single container for the speaker button + additional controls
    this.container = this.createContainer();
    this.container.classList.add("tts-container");
    this.container.style.display = "none"; // Hidden by default
    document.body.appendChild(this.container);

    this.initSelectionListener();

    // Update currentOffset as speech progresses
    this.speech.onboundary = (event) => {
      if (event.charIndex !== undefined) {
        this.currentOffset += event.charIndex;
      }
    };

    // When speech ends, handle cleanup
    this.speech.onend = () => this.onSpeechEnd();
  }

  createContainer() {
    const container = document.createElement("div");
    Object.assign(container.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center", // center items horizontally
      gap: "10px",
      background: "rgba(71, 111, 144, 0.85)", // Matches your navbar color
      padding: "10px",
      borderRadius: "25px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "width 0.3s ease",
      overflow: "hidden",       // hide anything that tries to overflow
      width: "50px",            // Collapsed: shows only the speaker button
      zIndex: 9999,             // Keep on top
    });

    // Speaker button
    this.speakerButton = document.createElement("button");
    this.speakerButton.innerHTML = '<i class="fas fa-volume-up"></i>'; // Font Awesome icon
    Object.assign(this.speakerButton.style, {
      fontSize: "1.5rem",
      border: "none",
      background: "transparent",
      color: "#fff",
      cursor: "pointer",
    });
    this.speakerButton.onclick = () => {
      // If already playing (or paused), just expand
      if (this.isPlaying) {
        this.expandPanel();
      } else {
        this.startTTS();
      }
    };

    // Control buttons (hidden initially)
    this.backButton = this.createControlButton("back", () => this.restartTTS());
    this.playPauseButton = this.createControlButton("playPause", () => this.togglePlayPause());
    this.forwardButton = this.createControlButton("forward", () => this.skipToEnd());

    // Speed dropdown
    this.speedSelect = document.createElement("select");
    Object.assign(this.speedSelect.style, {
      padding: "5px",
      borderRadius: "5px",
      border: "none",
      fontSize: "1rem",
      cursor: "pointer",
    });
    [0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0].forEach((speed) => {
      const option = document.createElement("option");
      option.value = speed;
      option.textContent = speed;
      if (speed === 1.0) option.selected = true;
      this.speedSelect.appendChild(option);
    });
    this.speedSelect.onchange = () => this.changeSpeed();

    // Append to the container
    container.appendChild(this.speakerButton);
    container.appendChild(this.backButton);
    container.appendChild(this.playPauseButton);
    container.appendChild(this.forwardButton);
    container.appendChild(this.speedSelect);

    return container;
  }

  createControlButton(type, onClick) {
    const button = document.createElement("button");
    switch (type) {
      case "back":
        button.innerHTML = '<i class="fas fa-backward"></i>';
        break;
      case "playPause":
        button.innerHTML = '<i class="fas fa-pause"></i>'; // Default to pause
        break;
      case "forward":
        button.innerHTML = '<i class="fas fa-forward"></i>';
        break;
      default:
        button.innerHTML = "";
    }
    Object.assign(button.style, {
      fontSize: "1.2rem",
      border: "none",
      background: "white",
      color: "#476f90",
      padding: "8px",
      borderRadius: "5px",
      cursor: "pointer",
      display: "none",
    });
    button.onclick = onClick;
    return button;
  }

  initSelectionListener() {
    document.addEventListener("mouseup", (event) => {
      // If clicking inside the container, do nothing
      if (event.target.closest(".tts-container")) {
        return;
      }

      const selectedText = window.getSelection().toString().trim();
      if (selectedText) {
        this.selectedText = selectedText;
        this.container.style.display = "flex";
        this.container.style.width = "50px"; // Show only speaker
        this.speakerButton.style.display = "block";
        this.hideControls();
        this.currentOffset = 0;
      } else {
        // If TTS not playing, hide container
        if (!this.isPlaying) {
          this.resetUI();
        } else {
          // TTS is playing or paused, so collapse to speaker
          this.collapseToSpeaker();
        }
      }
    });

    document.addEventListener("scroll", () => {
      if (!window.getSelection().toString().trim() && !this.isPlaying) {
        this.resetUI();
      }
    });
  }

  collapseToSpeaker() {
    // Shrink to show only the speaker icon
    this.container.style.width = "50px";
    this.speakerButton.style.display = "block";
    this.hideControls();
  }

  expandPanel() {
    // Make container wide enough so everything fits
    this.speakerButton.style.display = "none";
    this.container.style.width = "220px"; // Increased to avoid overflow
    this.showControls();
  }

  startTTS() {
    if (!this.selectedText) return;
    if (this.speech.lang === "en-US") {
      this.currentOffset = 0;
      this.speech.text = this.selectedText;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(this.speech);
      this.isPlaying = true;
      this.isPaused = false;
    } else {
      // For Amharic TTS
      this.readAmharicText(this.selectedText);
      return;
    }
    this.expandPanel();
    this.playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
  }

  showControls() {
    this.backButton.style.display = "inline-block";
    this.playPauseButton.style.display = "inline-block";
    this.forwardButton.style.display = "inline-block";
    this.speedSelect.style.display = "inline-block";
  }

  hideControls() {
    this.backButton.style.display = "none";
    this.playPauseButton.style.display = "none";
    this.forwardButton.style.display = "none";
    this.speedSelect.style.display = "none";
  }

  changeSpeed() {
    const newRate = parseFloat(this.speedSelect.value);
    this.speech.rate = newRate;
    // If TTS is currently playing or paused, we preserve that state
    if (this.isPlaying) {
      // Cancel & recreate from current offset to apply new rate
      const remainingText = this.selectedText.substring(this.currentOffset);
      window.speechSynthesis.cancel();

      const newSpeech = new SpeechSynthesisUtterance(remainingText);
      newSpeech.lang = this.speech.lang;
      newSpeech.rate = newRate;

      newSpeech.onboundary = (event) => {
        if (event.charIndex !== undefined) {
          this.currentOffset += event.charIndex;
        }
      };
      newSpeech.onend = () => this.onSpeechEnd();

      this.speech = newSpeech;
      // Always speak the new utterance so we can pause/resume properly
      window.speechSynthesis.speak(newSpeech);

      // If we were paused, immediately pause again
      if (this.isPaused) {
        window.speechSynthesis.pause();
      }
    }
  }

  togglePlayPause() {
    // If TTS ended but text remains selected => start TTS again
    if (!window.speechSynthesis.speaking && this.selectedText && !this.isPaused && !this.isPlaying) {
      this.startTTS();
      return;
    }

    if (!this.isPaused && window.speechSynthesis.speaking) {
      // Pause
      // NOTE: There's sometimes a small delay before it actually stops speaking.
      // The Web Speech API doesn't provide a guaranteed immediate "word boundary" pause.
      window.speechSynthesis.pause();
      this.playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
      this.isPaused = true;
      this.isPlaying = true; // We are "in a TTS session" but paused
    } else if (this.isPaused && this.isPlaying) {
      // Resume
      window.speechSynthesis.resume();
      this.playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
      this.isPaused = false;
    }
  }

  restartTTS() {
    window.speechSynthesis.cancel();
    this.currentOffset = 0;
    this.isPaused = false;
    this.isPlaying = false;
    this.startTTS();
  }

  skipToEnd() {
    window.speechSynthesis.cancel();
    this.onSpeechEnd();
  }

  onSpeechEnd() {
    this.isPlaying = false;
    this.isPaused = false;
    this.playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    if (!window.getSelection().toString().trim()) {
      this.resetUI();
    } else {
      this.collapseToSpeaker();
    }
  }

  resetUI() {
    this.container.style.display = "none";
  }

  // Placeholder for Amharic TTS
  readAmharicText(text) {
    const segments = this.splitAmharicText(text);
    this.playAmharicSegments(segments);
  }

  splitAmharicText(text) {
    const maxChars = 300;
    let segments = [];
    if (text.length <= maxChars) {
      segments.push(text);
    } else {
      let sentences = text.split("።");
      let segment = "";
      for (let sentence of sentences) {
        sentence = sentence.trim();
        if (!sentence) continue;
        let candidate = segment ? segment + "።" + sentence : sentence;
        if (candidate.length <= maxChars) {
          segment = candidate;
        } else {
          if (segment) {
            segments.push(segment + "።");
            segment = sentence;
          } else {
            segments.push(candidate.slice(0, maxChars));
            segment = candidate.slice(maxChars);
          }
        }
      }
      if (segment) {
        segments.push(segment + "።");
      }
    }
    return segments;
  }

  playAmharicSegments(segments) {
    let index = 0;
    const playNext = () => {
      if (index >= segments.length) {
        this.onSpeechEnd();
        return;
      }
      console.log("Playing Amharic segment:", segments[index]);
      // Replace with real logic for generating & playing audio
      alert(`Playing Amharic segment:\n${segments[index]}`);
      setTimeout(() => {
        index++;
        playNext();
      }, 2000);
    };
    playNext();
    this.expandPanel();
    this.playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    this.isPlaying = true;
    this.isPaused = false;
  }

  toggleLanguage(lang) {
    this.speech.lang = lang === "am" ? "am-ET" : "en-US";
  }
}

const ttsInstance = new TTS();
export default ttsInstance;
