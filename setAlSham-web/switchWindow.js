function switchPage() {
    const screenWidth = window.innerWidth;

    // Choose the HTML file based on screen width
    const pageToLoad = screenWidth < 768 ? 'mobile.html' : 'index.html';

    // Load the chosen HTML file only if the window size has changed significantly
    if (window.location.href.indexOf(pageToLoad) === -1) {
        window.location.href = pageToLoad;
    }
}

// Call the switchPage function when the window is resized
window.addEventListener('resize', switchPage);

// Initial call to switchPage on page load
switchPage();