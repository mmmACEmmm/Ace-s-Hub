// Open app function
function openApp(url, appName) {
    showLaunchIndicator(appName);
    window.open(url, '_blank');
}

// Show launch indicator when opening apps
function showLaunchIndicator(appName) {
    const indicator = document.getElementById('launchIndicator');
    const text = document.getElementById('launchText');
    text.textContent = `Opening ${appName}...`;
    indicator.classList.add('show');
    
    setTimeout(() => {
        indicator.classList.remove('show');
    }, 1500);
}

// Panel controls
function toggle(panel) {
    const p = document.getElementById(panel + 'Panel');
    document.querySelectorAll('.panel').forEach(el => el.classList.remove('show'));
    p.classList.toggle('show');
}

function closePanel(id) {
    document.getElementById(id).classList.remove('show');
}

function close() {
    document.body.style.opacity = '0';
    setTimeout(() => document.body.style.display = 'none', 300);
}

// Real-time stats - Fixed and accurate
let fps = 0, frames = 0, lastTime = performance.now();

function updateFPS() {
    frames++;
    const now = performance.now();
    if (now - lastTime >= 1000) {
        fps = Math.round(frames / ((now - lastTime) / 1000));
        const fpsElement1 = document.getElementById('fps');
        const fpsElement2 = document.getElementById('fps2');
        if (fpsElement1) fpsElement1.textContent = fps + ' fps';
        if (fpsElement2) fpsElement2.textContent = fps + ' fps';
        frames = 0;
        lastTime = now;
    }
    requestAnimationFrame(updateFPS);
}

// More accurate ping measurement
function updatePing() {
    const start = performance.now();
    
    // Use multiple methods for better accuracy
    fetch(window.location.href + '?cache-bust=' + Date.now(), { 
        method: 'HEAD',
        cache: 'no-cache'
    }).then(() => {
        const ping = Math.round(performance.now() - start);
        const pingElement1 = document.getElementById('ping');
        const pingElement2 = document.getElementById('ping2');
        if (pingElement1) pingElement1.textContent = ping + 'ms';
        if (pingElement2) pingElement2.textContent = ping + 'ms';
    }).catch(() => {
        // Fallback method
        const img = new Image();
        img.onload = img.onerror = () => {
            const ping = Math.round(performance.now() - start);
            const pingElement1 = document.getElementById('ping');
            const pingElement2 = document.getElementById('ping2');
            if (pingElement1) pingElement1.textContent = ping + 'ms';
            if (pingElement2) pingElement2.textContent = ping + 'ms';
        };
        img.src = window.location.origin + '/favicon.ico?' + Date.now();
    });
    
    setTimeout(updatePing, 5000); // Update every 5 seconds
}

function updateSystemInfo() {
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ':' + 
                now.getMinutes().toString().padStart(2, '0');
    
    // Update time
    const timeElement = document.getElementById('time');
    if (timeElement) timeElement.textContent = time;
    
    // Update viewport dimensions
    const viewElement = document.getElementById('view');
    if (viewElement) viewElement.textContent = window.innerWidth + '×' + window.innerHeight;
    
    // Detect browser more accurately
    const ua = navigator.userAgent;
    let browser = 'Unknown';
    
    if (ua.includes('Firefox')) {
        browser = 'Firefox';
    } else if (ua.includes('Safari') && !ua.includes('Chrome')) {
        browser = 'Safari';
    } else if (ua.includes('Edge')) {
        browser = 'Edge';
    } else if (ua.includes('Chrome')) {
        browser = 'Chrome';
    } else if (ua.includes('Opera')) {
        browser = 'Opera';
    }
    
    const browserElement = document.getElementById('browser');
    if (browserElement) browserElement.textContent = browser;
    
    // Platform detection with more detail
    let platform = navigator.platform;
    
    // More specific platform detection
    if (navigator.userAgentData && navigator.userAgentData.platform) {
        platform = navigator.userAgentData.platform;
    } else {
        // Fallback detection
        if (ua.includes('Windows NT 10.0')) platform = 'Windows 10';
        else if (ua.includes('Windows NT 6.3')) platform = 'Windows 8.1';
        else if (ua.includes('Windows NT 6.1')) platform = 'Windows 7';
        else if (ua.includes('Mac OS X')) platform = 'macOS';
        else if (ua.includes('Linux')) platform = 'Linux';
        else if (ua.includes('Android')) platform = 'Android';
        else if (ua.includes('iPhone')) platform = 'iOS';
        else if (ua.includes('iPad')) platform = 'iPadOS';
    }
    
    const platformElement = document.getElementById('platform');
    if (platformElement) platformElement.textContent = platform;
}

// Memory usage (if available)
function updateMemoryInfo() {
    if ('memory' in performance) {
        const memory = performance.memory;
        const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
        const totalMB = Math.round(memory.totalJSHeapSize / 1048576);
        
        // You can add memory info to the stats if you want
        console.log(`Memory: ${usedMB}MB / ${totalMB}MB`);
    }
}

// Network connection info (if available)
function updateConnectionInfo() {
    if ('connection' in navigator) {
        const connection = navigator.connection;
        const speed = connection.downlink || 'Unknown';
        const type = connection.effectiveType || 'Unknown';
        
        console.log(`Connection: ${type}, Speed: ${speed} Mbps`);
    }
}

// Initialize all stats
function initializeStats() {
    updateSystemInfo();
    updateFPS();
    updatePing();
    updateMemoryInfo();
    updateConnectionInfo();
    
    // Update system info every second
    setInterval(updateSystemInfo, 1000);
    
    // Update memory info every 10 seconds
    setInterval(updateMemoryInfo, 10000);
    
    // Update connection info every 30 seconds
    setInterval(updateConnectionInfo, 30000);
    
    // Update viewport on resize
    window.addEventListener('resize', () => {
        const viewElement = document.getElementById('view');
        if (viewElement) {
            viewElement.textContent = window.innerWidth + '×' + window.innerHeight;
        }
    });
}

// Keyboard shortcuts
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.panel.show').forEach(p => p.classList.remove('show'));
    }
});

// Add subtle mouse tracking for enhanced interactivity
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.dashboard-card, .feature-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        } else {
            card.style.transform = '';
        }
    });
});

// Enhanced loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        document.body.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        document.body.style.opacity = '1';
        document.body.style.transform = 'scale(1)';
        
        // Initialize stats after page loads
        initializeStats();
    }, 100);
});
