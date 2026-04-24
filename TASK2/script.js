// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('magicBtn');
    
    btn.addEventListener('click', () => {
        // Change the background color of the hero section randomly
        const hero = document.querySelector('.hero');
        const colors = ['#007bff', '#28a745', '#6f42c1', '#e83e8c'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        hero.style.background = randomColor;
        btn.innerText = "Color Changed!";
        
        // Reset after 2 seconds
        setTimeout(() => {
            btn.innerText = "Click for Magic";
        }, 2000);
    });
});