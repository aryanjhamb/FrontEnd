// fetchUserProfile.js

/**
 * Fetches a CodeStudio user profile and updates the DOM with the user's info.
 * @param {string} apiKey - The API key for authorization (Bearer token)
 * @param {string} username - The CodeStudio username or user ID
 */
export async function fetchAndShowProfile(apiKey, username) {
  // The CodeStudio API endpoint for user profile
  const API_URL = `https://api.codestudio.com/v1/users/${username}`;

  // Get DOM elements for updating user info
  const nameEl = document.getElementById('userName');
  const emailEl = document.getElementById('userEmail');
  const avatarEl = document.getElementById('userAvatar');
  const usernameEl = document.getElementById('userUsername');

  try {
    // Send GET request with Authorization header
    const res = await fetch(API_URL, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json',
      },
    });

    // Check for HTTP errors
    if (!res.ok) {
      throw new Error(`Failed to fetch profile: ${res.status} ${res.statusText}`);
    }

    // Parse JSON response
    const data = await res.json();

    // Check for required fields
    if (!data || !data.name || !data.email || !data.avatarUrl || !data.username) {
      throw new Error('Incomplete user data received from API.');
    }

    // Update DOM elements with user data
    // Set the user's name
    if (nameEl) nameEl.textContent = data.name;
    // Set the user's email
    if (emailEl) emailEl.textContent = data.email;
    // Set the user's avatar image URL
    if (avatarEl) avatarEl.src = data.avatarUrl;
    // Set the user's username as plain text
    if (usernameEl) usernameEl.textContent = data.username;
  } catch (err) {
    // Optionally, log the error for debugging
    console.error('Profile fetch error:', err);
    // If desired, you could set fallback text or styling here
  }
}

// Example API key (replace with your actual API key)
const apiKey = 'YOUR_API_KEY_HERE';

// Call the function on page load with the provided username
window.addEventListener('DOMContentLoaded', () => {
  fetchAndShowProfile(apiKey, 'f7efd4fa-0edc-4207-b791-c7d0cef43cec');
}); 