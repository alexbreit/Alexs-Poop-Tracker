// Function to fetch and display Google Sheets data
async function fetchGoogleSheetData() {
    const url = 'https://docs.google.com/spreadsheets/d/e/YOUR_SPREADSHEET_ID/pub?output=csv';
  
    try {
      const response = await fetch(url);
      const data = await response.text();
  
      // Process CSV data into HTML
      const rows = data.split('\n').map(row => row.split(','));
      let html = '<table border="1" cellpadding="5">';
      rows.forEach(row => {
        html += '<tr>';
        row.forEach(cell => {
          html += `<td>${cell}</td>`;
        });
        html += '</tr>';
      });
      html += '</table>';
  
      // Insert into the HTML div
      document.getElementById('sheetData').innerHTML = html;
    } catch (error) {
      document.getElementById('sheetData').innerText = 'Failed to load data';
      console.error('Error fetching the data:', error);
    }
  }
  
  // Call the function when the page loads
  window.onload = fetchGoogleSheetData;
