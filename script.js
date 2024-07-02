document.addEventListener('DOMContentLoaded', () => {
    // Function to update the current time in UTC
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const currentTimeUTC = document.getElementById('currentTimeUTC');
        currentTimeUTC.textContent = utcTime;

        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = document.getElementById('currentDay');
        currentDay.textContent = dayNames[now.getUTCDay()];
    }

    // Initial update and then update every second
    updateTime();
    setInterval(updateTime, 1000);
});
