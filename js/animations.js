// // Animation utilities
// export function animateLabEntry() {
//     const circle = document.getElementById('circle');
//     const leftDoor = document.getElementById('squ1');
//     const rightDoor = document.getElementById('squ2');

//     // Rotate and fade circle
//     circle.style.transition = 'all 1.5s ease-in-out';
//     circle.style.transform = 'rotate(360deg)';
//     circle.style.opacity = '0';

//     // Slide doors
//     setTimeout(() => {
//         leftDoor.style.transform = 'translateX(-100%)';
//         rightDoor.style.transform = 'translateX(100%)';
//     }, 750);

//     // Reset animations after entry
//     setTimeout(() => {
//         circle.style.display = 'none';
//         leftDoor.style.display = 'none';
//         rightDoor.style.display = 'none';
//     }, 2000);
// }

// export function resetAnimations() {
//     const circle = document.getElementById('circle');
//     const leftDoor = document.getElementById('squ1');
//     const rightDoor = document.getElementById('squ2');

//     circle.style.transition = 'none';
//     circle.style.transform = 'none';
//     circle.style.opacity = '1';
//     circle.style.display = 'block';

//     leftDoor.style.transition = 'none';
//     leftDoor.style.transform = 'none';
//     leftDoor.style.display = 'block';

//     rightDoor.style.transition = 'none';
//     rightDoor.style.transform = 'none';
//     rightDoor.style.display = 'block';
// }
// Animation utilities
export function animateLabEntry() {
    const circle = document.getElementById('circle');
    const leftDoor = document.getElementById('squ1');
    const rightDoor = document.getElementById('squ2');

    // Add transition properties to elements
    leftDoor.style.transition = 'transform 1.5s ease-in-out';
    rightDoor.style.transition = 'transform 1.5s ease-in-out';
    circle.style.transition = 'all 1.5s ease-in-out';

    // Rotate and fade circle
    circle.style.transform = 'rotate(360deg)';
    circle.style.opacity = '0';

    // Slide doors after a small delay
    setTimeout(() => {
        leftDoor.style.transform = 'translateX(-100%)';
        rightDoor.style.transform = 'translateX(100%)';
    }, 750);
    

    // Hide elements after animation
    setTimeout(() => {
        circle.style.display = 'none';
        leftDoor.style.display = 'none';
        rightDoor.style.display = 'none';
    }, 2000);
}

export function resetAnimations() {
    const circle = document.getElementById('circle');
    const leftDoor = document.getElementById('squ1');
    const rightDoor = document.getElementById('squ2');

    // Reset all animations and styles
    circle.style.transition = 'none';
    circle.style.transform = 'none';
    circle.style.opacity = '1';
    circle.style.display = 'block';

    leftDoor.style.transition = 'none';
    leftDoor.style.transform = 'none';
    leftDoor.style.display = 'block';

    rightDoor.style.transition = 'none';
    rightDoor.style.transform = 'none';
    rightDoor.style.display = 'block';
}