

async function fetchN8NData(name:string, email:string, message : string) {
 
  const response = await fetch('https://abdelrahman1dev1.app.n8n.cloud/webhook/fcff3da0-a09d-41cf-a192-1028417d1496', {
    cache: 'no-store', // Ensure fresh data on each request
    body: JSON.stringify({ key: 'value', name, email, message }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
    if (!response.ok) {
        throw new Error('Failed to fetch data from n8n');
    }else {
        console.log("n8n response", response);
    }
    return response.json();
}

export { fetchN8NData };