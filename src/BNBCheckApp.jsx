import React, { useState } from 'react';

import React, { useState } from 'react';

export default function BNBCheckApp() {
  const [city, setCity] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate result — this will be replaced with real logic later
    if (city.toLowerCase().includes('nashville')) {
      setResult('❌ Short-term rentals are restricted in Nashville.');
    } else {
      setResult('✅ This city may allow short-term rentals. Double-check local laws.');
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Welcome to BNB Check</h1>
      <p>Answer a few questions to check short-term rental rules in your area.</p>

      <form onSubmit={handleSubmit}>
        <label>
          <strong>Where is this property?</strong><br />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter a city or zip"
            required
            style={{ padding: '0.5rem', width: '300px', marginTop: '0.5rem' }}
          />
        </label>
        <br /><br />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Check Rules
        </button>
      </form>

      {result && (
        <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          {result}
        </div>
      )}
    </div>
  );
}