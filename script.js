const container = document.querySelector('.container');

function createFlyingObject() {
    const object = document.createElement('div');
    object.className = 'object';
    object.style.left = Math.random() * 100 + 'vw';
    object.style.animationDuration = Math.random() * 5 + 3 + 's'; // Random duration between 3s and 8s
    object.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
    container.appendChild(object);

    object.addEventListener('animationend', () => {
        object.remove();
    });
}

// Create new flying objects at intervals
setInterval(createFlyingObject, 1000);
