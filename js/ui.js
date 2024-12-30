// UI management
export function updateBatteryLevel(timeRemaining, totalTime) {
    const percentage = (timeRemaining / totalTime) * 100;
    const segments = document.querySelectorAll('.segment');
    
    segments.forEach((segment, index) => {
        const segmentPercentage = ((index + 1) / segments.length) * 100;
        
        if (percentage >= segmentPercentage) {
            segment.classList.add('filled');
            segment.classList.remove('half-filled');
        } else if (percentage > (segmentPercentage - (100 / segments.length))) {
            segment.classList.add('half-filled');
            segment.classList.remove('filled');
        } else {
            segment.classList.remove('filled', 'half-filled');
        }
    });

    document.querySelector('.progress-text h2').textContent = 
        `${Math.floor(timeRemaining / 60)} minutes left`;
}

export function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    document.getElementById('pass').appendChild(errorDiv);
    
    setTimeout(() => errorDiv.remove(), 3000);
}

export function createLabInterface() {
    const labInterface = document.createElement('div');
    labInterface.id = 'lab-interface';
    labInterface.innerHTML = `
        <div class="lab-controls">
            <div class="time-display">
                <h2>Time Remaining</h2>
                <div id="time-counter">10:00</div>
            </div>
            <button id="exit-lab" class="exit-button">Exit Lab</button>
        </div>
    `;
    
    document.body.appendChild(labInterface);
    return labInterface;
}