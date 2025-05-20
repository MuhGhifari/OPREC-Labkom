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