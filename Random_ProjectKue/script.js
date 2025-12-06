// JavaScript Document

const videoPart1 = [
	{ src: "videos/Letters.mp4", caption: "A box full of... what used to be." },
	{ src: "videos/Jars.mp4", caption: "Some memories choose their own shape." },
	{ src: "videos/Lily_of_the_Valley.mp4", caption: "Objects know stories." },
	{ src: "videos/Ring.mp4", caption: "A symbol of what almost was.."}
];

const videoPart2 = [
	{ src: "videos/Hands_fidgeting.mp4", caption: "Hands remember what we try to forget..." },
	{ src: "videos/Hands_tapping.mp4", caption: "Nervous habits. Quiet signals." },	
	{ src: "videos/tying_shoes.mp4", caption: "I keep trying..." }	
];

const videoPart3 = [
	{ src: "videos/Corner.mp4", caption: "Some rooms grow quieter with time."},
	{ src: "videos/Hallway.mp4", caption: "These places hold pieces of me..." },	
	{ src: "videos/Sink.mp4", caption: "The things that slip through my hands." },	
];

const titleOverlay = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText"); // NEW
const replayBtn = document.getElementById("replayBtn");

function picker(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	console.log("Random word:", array[randomIndex]);
	return array[randomIndex];
}

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);

let playlist = []; // creates an empty array
let currentIndex = 0;

function buildVideo() {
//titleOverlay.style.display = "none"; // REMOVED
	titleOverlay.classList.add("playing"); // NEW
	player.classList.add("fullscreen");
	replayBtn.style.display = "none";

	playlist = [
	picker(videoPart1),
	picker(videoPart2),
	picker(videoPart3),
	];
	
	currentIndex = 0;
	playCurrent();
}

function playCurrent() {
	const current = playlist[currentIndex]; // { src: "...", caption: "..." }
	titleText.textContent = current.caption;
	
	player.src = current.src;
	player.load();
	player.play().catch(err => {
	
	});
}

// Advance when a video ends
player.addEventListener("ended", () => {
	currentIndex++;
	if (currentIndex < playlist.length) {
		playCurrent();
	} else {
		console.log("All three parts finished.");
		replayBtn.style.display = "block";
	}
});