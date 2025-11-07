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
 * Switches to a random video
 * - Saves the current playback position
 * - Picks a random new video that’s different from the current one
 * - Loads and resumes that video from its saved position
 */
function switchVideo() {
  enableAudio();

  // Save current video time
  positions[currentVideo] = videoPlayer.currentTime;

  // Pick a random new video (different from current one)
  let newVideo;
  do {
    newVideo = Math.floor(Math.random() * videos.length);
  } while (newVideo === currentVideo);

  // Switch to the new video
  currentVideo = newVideo;
  videoPlayer.src = videos[currentVideo];

  // Restore playback time and continue playing
  videoPlayer.onloadedmetadata = () => {
    videoPlayer.currentTime = positions[currentVideo];
    videoPlayer.play();
  };
}

// Add click listeners for both the text box and video
switchBox.addEventListener("click", switchVideo);
videoPlayer.addEventListener("click", switchVideo);
