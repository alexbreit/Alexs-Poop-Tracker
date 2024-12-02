// Function to fetch and display Google Sheets data
async function fetchGoogleSheetData() { //Defines an asynchronous function named fetchGoogleSheetData that will fetch data from a Google Sheets URL and display it on the webpage.
    const url = 'https://docs.google.com/spreadsheets/d/1aNNnQ4g5gLy_Eoyclvmw3l-kwzppg_uYgNbBNXWXNrQ/edit?gid=233518721#gid=233518721'; /*Declares a constant variable url that stores the link to the Google Sheets 
                                                                                                                                        document you want to fetch data from.*/
    try { //Starts a try-catch block, which attempts to execute the code inside it, but if an error occurs, it jumps to the catch block to handle the error.
      const response = await fetch(url); //Uses the fetch() function to send a request to the URL stored in the url variable. await ensures that JavaScript waits for the data to be retrieved before continuing.
      const data = await response.text(); //Waits for the response from fetch() to be returned as text (the raw CSV data from the Google Sheets document).
  
      // Process CSV data into HTML
      const rows = data.split('\n').map(row => row.split(',')); //Splits the CSV data into rows using the newline character (\n), then splits each row into cells by the comma (,), creating a 2D array of the data (rows and columns).
      let html = '<table border="1" cellpadding="5">'; //Initializes a string html that will hold the HTML table code, including a table with borders and padding around cells.
      rows.forEach(row => { //Loops through each row in the rows array (i.e., each row of data).
        html += '<tr>'; //Adds an opening <tr> tag to represent a table row.
        row.forEach(cell => { //Loops through each cell in the current row (i.e., each cell of data in the row).
          html += `<td>${cell}</td>`; //Adds each cell value wrapped in a <td> (table data) element to the html string, creating a table cell for each value.
        });
        html += '</tr>'; //Adds a closing </tr> tag after each row is processed.
      });
      html += '</table>'; //Adds a closing </table> tag to finish the HTML table.
  
      // Insert into the HTML div
      document.getElementById('sheetData').innerHTML = html; //Selects the HTML element with the id sheetData and inserts the generated HTML table into it, displaying the table of data on the webpage.
    } catch (error) { //Catches any errors that occur during the try block (e.g., if the fetch request fails).
      document.getElementById('sheetData').innerText = 'Failed to load data'; //If an error occurs, it sets the inner text of the sheetData element to show a message indicating that the data failed to load.
      console.error('Error fetching the data:', error); //Logs the error to the browser’s console, providing more details about what went wrong.
    }
  }
  
  // Call the function when the page loads
  window.onload = fetchGoogleSheetData; //Calls the fetchGoogleSheetData() function when the page finishes loading (i.e., after the page’s HTML is fully rendered).
