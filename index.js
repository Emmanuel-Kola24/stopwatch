// script.js
let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId;
let timeoutId;
let isRunning = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Start the stopwatch
startButton.addEventListener('click', () => {
    if (!isRunning) {
        intervalId = setInterval(updateTime, 1000); // Update every second
        isRunning = true;
        // Use setTimeout for a specific delay if needed
        timeoutId = setTimeout(() => {
            console.log('1 minute has passed!');
        }, 60000); // Example: action after 1 minute
    }
});

// Stop the stopwatch
stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    clearTimeout(timeoutId); // Clear timeout to prevent the delayed action
    isRunning = false;
});

// Reset the stopwatch
resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    clearTimeout(timeoutId); // Clear timeout to prevent any delayed actions
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    display.textContent = formatTime(hours, minutes, seconds);
});

// Update the time
function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    display.textContent = formatTime(hours, minutes, seconds);
}

// Format the time to display it correctly
function formatTime(hours, minutes, seconds) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Pad the numbers to ensure two digits
function pad(number) {
    return number.toString().padStart(2, '0');
}
