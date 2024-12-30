import { validatePassword, startTimer, stopTimer, hasTimeRemaining, getRemainingTime } from './auth.js';
import { animateLabEntry, resetAnimations } from './animations.js';
import { updateBatteryLevel, showError, createLabInterface } from './ui.js';

let labInterface = null;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimeDisplay(timeRemaining) {
    if (labInterface) {
        const timeCounter = labInterface.querySelector('#time-counter');
        if (timeCounter) {
            timeCounter.textContent = formatTime(timeRemaining);
        }
    }
    updateBatteryLevel(timeRemaining, 600);
}

function handleLabExit() {
    stopTimer();
    if (labInterface) {
        labInterface.remove();
        labInterface = null;
    }
    resetAnimations();
}

function handleTimeExpired() {
    showError('Your lab time has expired!');
    handleLabExit();
}

function enterLab() {
    animateLabEntry();
    labInterface = createLabInterface();
    
    const exitButton = labInterface.querySelector('#exit-lab');
    exitButton.addEventListener('click', handleLabExit);
    
    startTimer(updateTimeDisplay, handleTimeExpired);
}

document.getElementById('LabTest').addEventListener('click', () => {
    const password = document.getElementById('passbar').value;
    
    if (!hasTimeRemaining()) {
        showError('You have exhausted your allocated time!');
        return;
    }
    
    if (validatePassword(password)) {
        enterLab();
    } else {
        showError('Incorrect password!');
    }
});