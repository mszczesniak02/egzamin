// Simple background flash with flying emojis
function flashBackground(color) {
    const body = document.body;
    const originalBg = body.style.backgroundColor || '#1a1a1a';
    
    console.log('Flashing background:', color);
    
    // Change to colored background
    body.style.transition = 'background-color 0.3s ease';
    body.style.backgroundColor = color;
    
    // Return to original after 1 second
    setTimeout(() => {
        body.style.backgroundColor = originalBg;
    }, 1000);
}

// Create flying emoji animation
function createFlyingEmojis(emoji, count = 50) {
    console.log('Creating flying emojis:', emoji, 'count:', count);
    
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    document.body.appendChild(container);
    
    console.log('Container created, creating', count, 'emojis...');
    
    // Create ALL 50 emojis AT ONCE - MASSIVE EXPLOSION!
    for (let i = 0; i < count; i++) {
        createSingleEmoji(container, emoji);
    }
    
    console.log('All emojis created!');
    
    // Remove container after animation completes
    setTimeout(() => {
        container.remove();
    }, 2000); // Give time for fade-out
}

function createSingleEmoji(container, emoji) {
    const emojiEl = document.createElement('div');
    
    // Random starting position (from sides or top)
    const side = Math.random();
    let startX, startY, endX, endY;
    
    if (side < 0.33) {
        // From left
        startX = -50;
        startY = Math.random() * window.innerHeight;
        endX = window.innerWidth + 50;
        endY = Math.random() * window.innerHeight;
    } else if (side < 0.66) {
        // From right
        startX = window.innerWidth + 50;
        startY = Math.random() * window.innerHeight;
        endX = -50;
        endY = Math.random() * window.innerHeight;
    } else {
        // From top
        startX = Math.random() * window.innerWidth;
        startY = -50;
        endX = Math.random() * window.innerWidth;
        endY = window.innerHeight + 50;
    }
    
    const size = 30 + Math.random() * 30; // Random size 30-60px
    const duration = 0.8 + Math.random() * 0.4; // Random duration 0.8-1.2s (shorter for 1s window)
    const rotation = Math.random() * 720 - 360; // Random rotation
    
    emojiEl.textContent = emoji;
    emojiEl.style.cssText = `
        position: absolute;
        left: ${startX}px;
        top: ${startY}px;
        font-size: ${size}px;
        transition: all ${duration}s ease-out;
        transform: rotate(0deg);
        opacity: 1;
    `;
    
    container.appendChild(emojiEl);
    
    // Trigger animation
    requestAnimationFrame(() => {
        emojiEl.style.left = endX + 'px';
        emojiEl.style.top = endY + 'px';
        emojiEl.style.transform = `rotate(${rotation}deg)`;
        emojiEl.style.opacity = '0'; // Automatic fade-out
    });
    
    // Remove after animation
    setTimeout(() => {
        emojiEl.remove();
    }, duration * 1000 + 100);
}

// Fireworks animation (now with party emojis)
function triggerFireworks() {
    console.log('🎉 TRIGGERFIRE WORKS CALLED!');
    flashBackground('#10b981'); // Green
    createFlyingEmojis('🎉', 50); // 50 party emojis over 1 second
}

// Red alarm animation (now with alarm emojis)
function triggerAlarm() {
    console.log('🚨 TRIGGER ALARM CALLED!');
    flashBackground('#ef4444'); // Red
    createFlyingEmojis('🚨', 50); // 50 alarm emojis over 1 second
}
