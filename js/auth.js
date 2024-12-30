// Authentication and time management
const LAB_CONFIG = {
    password: 'lab123', // In a real app, this would be securely stored
    totalTime: 600, // 10 minutes in seconds
    remainingTime: 600
};

let isLoggedIn = false;
let timer = null;

export function validatePassword(password) {
    return password === LAB_CONFIG.password;
}

export function getRemainingTime() {
    return LAB_CONFIG.remainingTime;
}

export function startTimer(onTimeUpdate, onTimeExpired) {
    if (timer) clearInterval(timer);
    
    timer = setInterval(() => {
        if (LAB_CONFIG.remainingTime > 0) {
            LAB_CONFIG.remainingTime--;
            onTimeUpdate(LAB_CONFIG.remainingTime);
            
            if (LAB_CONFIG.remainingTime === 0) {
                clearInterval(timer);
                onTimeExpired();
            }
        }
    }, 1000);
}

export function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

export function hasTimeRemaining() {
    return LAB_CONFIG.remainingTime > 0;
}