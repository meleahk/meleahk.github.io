// Get references to video and text box elements
const videoPlayer = document.getElementById("videoPlayer");
const switchBox = document.getElementById("switchBox");

// Define paths to videos
const videos = [
  "videos/video01.mp4",
  "videos/video02.mp4",
  "videos/video03.mp4",
  "videos/video04.mp4",
  "videos/video05.mp4"
];

// Store playback positions for each video
let positions = new Array(videos.length).fill(0);

// Track which video is currently playing
let currentVideo = 0;

// Track whether audio has been enabled yet
let audioEnabled = false;

/**
 * Enables audio playback on first user interaction
 */
function enableAudio() {
  if (!audioEnabled) {
    videoPlayer.muted = false; // Unmute video
    videoPlayer.volume = 1.0;  // Full volume
    videoPlayer.play();        // Resume playback
    audioEnabled = true;
  }
}

/**
 * Switches to the next video in the list
 * - Saves current video's playback position
 * - Loads the next video from its last position
 */
function switchVideo() {
  enableAudio();

  // Save current position of current video
  positions[currentVideo] = videoPlayer.currentTime;

  // Move to next video (loop back to start)
  currentVideo = (currentVideo + 1) % videos.length;

  // Load next video and restore position
  videoPlayer.src = videos[currentVideo];
  videoPlayer.onloadedmetadata = () => {
    videoPlayer.currentTime = positions[currentVideo];
    videoPlayer.play();
  };
}

// Add click event listeners
switchBox.addEventListener("click", switchVideo);
videoPlayer.addEventListener("click", switchVideo);
