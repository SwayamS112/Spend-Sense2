// frontend/src/api/api.js

export const loginUser = async (credentials) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    // ✅ Safely handle bad responses
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Server returned ${response.status}: ${text}`);
    }

    return await response.json();

  } catch (error) {
    console.error('Login fetch failed:', error);
    throw error;
  }
};
