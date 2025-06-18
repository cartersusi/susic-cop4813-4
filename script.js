function UpdateBackground() {
    const now = new Date();
    const t = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
    const hour = t.getHours();
    const timeString = t.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'America/New_York'
    });
    
    let backgroundImage;
    let timePeriod;
    
    if (hour >= 6 && hour < 12) {
      backgroundImage = 'url("images/morning.jpg")';
      timePeriod = 'Morning';
    } else if (hour >= 12 && hour < 18) {
      backgroundImage = 'url("images/mid-day.jpg")';
      timePeriod = 'Midday';
    } else {
      backgroundImage = 'url("images/night.jpg")';
      timePeriod = 'Night';
    }
    
    document.body.style.backgroundImage = backgroundImage;
    document.getElementById('currentTime').textContent = timeString;
    document.getElementById('timePeriod').textContent = `${timePeriod} in Eastern Time`;
   }
   
   UpdateBackground();
   setInterval(UpdateBackground, 1000);