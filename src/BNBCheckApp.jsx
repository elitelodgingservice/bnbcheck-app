import React, { useState } from 'react';

export default function BNBCheckApp() {
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just pretend every city is okay
    setMessage(`✅ ${city} allows short-term rentals (check local ordinances to confirm).`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Welcome to BNB Check</h1>
      <p>Answer a few questions to check short-term rental rules in your area.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Where is this property?
          <br />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Austin, TX"
            style={{ marginTop: '5px', padding: '5px', width: '200px' }}
          />
        </label>
        <br /><br />
        <button type="submit">Check</button>
      </form>
      {message && <p style={{ marginTop: '20px' }}>{message}</p>}
    </div>
  );
}