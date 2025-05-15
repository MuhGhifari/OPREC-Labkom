function fillLineWithEquals() {
    const container = document.getElementById('container') || document.querySelector('.landing');
    const lines = document.querySelectorAll('.cmdBorder');

    // Measure width of one '=' character in monospace font
    const testChar = document.createElement('span');
    testChar.style.fontFamily = 'Source Code Pro';
    testChar.style.visibility = 'hidden';
    testChar.textContent = '=';
    document.body.appendChild(testChar);

    const charWidth = testChar.getBoundingClientRect().width;
    const containerWidth = container.getBoundingClientRect().width;
    const count = Math.floor(containerWidth / charWidth);

    document.body.removeChild(testChar);

    lines.forEach(line => {
        line.textContent = '='.repeat(count);
    });
}

// Initial fill
fillLineWithEquals();

// Optional: update on window resize
window.addEventListener('resize', fillLineWithEquals);

// --- Loading animation logic ---
document.addEventListener('DOMContentLoaded', function() {
    const cli = document.querySelector('.cli');
    const loadingText = document.createElement('p');
    loadingText.id = 'loadingText';
    loadingText.textContent = 'Program Dijalankan';
    const dots = ['', '.', '..', '...'];
    let dotIndex = 0;
    let interval;
    // Hide all CLI children except loadingText
    const children = Array.from(cli.children);
    children.forEach((child, idx) => {
        if (idx !== 0) child.style.display = 'none';
    });
    cli.replaceChild(loadingText, cli.children[0]);

    function startLoadingAnimation() {
        interval = setInterval(() => {
            loadingText.textContent = 'Program Dijalankan' + dots[dotIndex];
            dotIndex = (dotIndex + 1) % dots.length;
        }, 400);
    }

    function stopLoadingAnimationAndShowRest() {
        clearInterval(interval);
        // Remove loadingText and show the rest
        cli.removeChild(loadingText);
        children.forEach((child, idx) => {
            if (idx !== 0) child.style.display = '';
        });
    }

    startLoadingAnimation();
    setTimeout(stopLoadingAnimationAndShowRest, 2200); // ~2 seconds
});