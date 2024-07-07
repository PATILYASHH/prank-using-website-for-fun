document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading delay
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').classList.remove('hidden');
        document.getElementById('content').classList.add('visible');
    }, 10000); // 3000 milliseconds = 3 seconds

    // Button click event listener
    document.getElementById('startButton').addEventListener('click', function() {
        // Open the YouTube video URL in a new tab/window
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    });
});
