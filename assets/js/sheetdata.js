async function fetchGoogleSheetData() { 
    const url = 'https://docs.google.com/spreadsheets/d/1aNNnQ4g5gLy_Eoyclvmw3l-kwzppg_uYgNbBNXWXNrQ/export?format=csv&id=1aNNnQ4g5gLy_Eoyclvmw3l-kwzppg_uYgNbBNXWXNrQ&gid=233518721'; // Corrected URL for CSV format
    try { 
        const response = await fetch(url); 
        const data = await response.text(); 
        
        // Process CSV data into HTML
        const rows = data.split('\n').map(row => row.split(',')); 
        let html = '<table border="1" cellpadding="5">'; 
        rows.forEach(row => {  
            html += '<tr>'; 
            row.forEach(cell => { 
                html += `<td>${cell}</td>`;  // Corrected template literal syntax
            });
            html += '</tr>'; 
        });
        html += '</table>'; 
        
        // Insert into the HTML div
        document.getElementById('sheet-data').innerHTML = html; 
    } catch (error) {  
        document.getElementById('sheet-data').innerText = 'Failed to load data'; 
        console.error('Error fetching the data:', error); 
    }
}

window.onload = fetchGoogleSheetData;
