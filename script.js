const images = [
    // ... (all the image filenames)
];

let currentIndex = 0;
let smashCount = 0;
let passCount = 0;

function updateCounts() {
    document.getElementById("smashCount").innerText = smashCount;
    document.getElementById("passCount").innerText = passCount;
}

function nextImage(choice) {
    if (choice === "smash") {
        smashCount++;
    } else if (choice === "pass") {
        passCount++;
    }

    updateCounts();

    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("image").src = "images/" + images[currentIndex];
}

// Initialize counts
updateCounts();
