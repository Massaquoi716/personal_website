
document.addEventListener('DOMContentLoaded', () => {
    // Display current time in UTC
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const updateTime = () => {
        const now = new Date();
        currentTimeUTC.textContent = now.toUTCString();
    };
    updateTime();
    setInterval(updateTime, 1000);

    // Display current day of the week
    const currentDay = document.querySelector('[data-testid="currentDay"]');
    currentDay.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long' });
});
