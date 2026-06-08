const fs = require('fs');
const path = require('path');
const os = require('os');
const { exec } = require("child_process");

const urls = [
    "https://www.youtube.com/watch?v=Bpb1HMTeKLE",
    "https://www.youtube.com/shorts/O3yLL4Ozn_w",
    "https://www.youtube.com/shorts/K7KqXXaU9Sg",
    "https://www.youtube.com/shorts/nct53F3B93g",
    "https://www.youtube.com/shorts/Lw1lZEz3QeI",
    "https://www.youtube.com/shorts/vO1Jh6NNX7w",
    "https://www.youtube.com/shorts/_HOY5qgMNN4",
    "https://www.youtube.com/shorts/Jj1OGBt5hZI",
    "https://www.youtube.com/shorts/A5nF-PfwcYg"
];

for (let i = 0; i < 20; i++) {
    exec(`start "" "${urls[i % urls.length]}"`);
}
