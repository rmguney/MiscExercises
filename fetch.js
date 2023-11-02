navigator.geolocation.getCurrentPosition(function(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const loca = document.getElementById("location");
  loca.innerHTML = `Enlem: ${latitude}, Boylam: ${longitude}`;
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const hourlyData = data['hourly']['temperature_2m'];
      const hourlyTable = document.getElementById('hourly-data');
      const now = new Date(); // get local time
      const localOffset = now.getTimezoneOffset() * 60 * 1000;

      for (let i = 0; i < 24; i++) {
        const hourRow = document.createElement('tr');
        const timestamp = now.getTime() - localOffset + ((i + 1) * 60 * 60 * 1000);

        const hour = new Date(timestamp).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false});
        const temperature = hourlyData[i];

        hourRow.innerHTML = `<td>${hour}</td><td>${temperature.toFixed(1)} °C</td>`;
        hourlyTable.appendChild(hourRow);
      }
    });
});
