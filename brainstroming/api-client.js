// Your DSS instance base URL
const baseUrl = 'https://your-dss-instance-url';

// Your personal API key (keep this secret)
const apiKey = 'YOUR_PERSONAL_API_KEY';

// The API endpoint you want to call, e.g., to get Code Studio info or dataset data
const apiPath = '/public/api/projects/MY_PROJECT/code-studios/MY_CODE_STUDIO_ID';

// Construct the full URL
const url = baseUrl + apiPath;

// Prepare the Basic Auth header: username is blank, API key as password
const headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa(':' + apiKey));
headers.append('Content-Type', 'application/json');

fetch(url, { method: 'GET', headers: headers })
  .then(response => {
    if (!response .ok) {
      return response.json().then(err => { throw new Error(err.message || 'API error'); });
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetched data:', data);
    // Process your data here
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  }); 