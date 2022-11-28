const rabbit = document.querySelector('.rabbit');
const run = () => {
    const windowWidth = window.innerWidth;
    rabbit.style.left = `${Math.random() * windowWidth}px`;
}
setInterval(run, 2000)

// Złap królika w debuggerze ;)
