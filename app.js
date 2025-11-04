const publicBtn = document.getElementById('publicBtn');
const protectedBtn = document.getElementById('protectedBtn');
const output = document.getElementById('output');

const API_URL = 'http://localhost:3000/api';

// Test public route
publicBtn.addEventListener('click', async () => {
  const res = await fetch(`${API_URL}/public`);
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
});

// Test protected route (requires Bearer token)
protectedBtn.addEventListener('click', async () => {
  const token = prompt("Enter Bearer token (try 'mysecrettoken123'):");
  const res = await fetch(`${API_URL}/secret`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
});
