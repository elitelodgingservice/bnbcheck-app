import React, { useState } from 'react';

export default function BNBCheckApp() {
  const [city, setCity] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated result logic
    if (city.toLowerCase().includes('nashville')) {
      setResult('❌ Short-term rentals are restricted in Nashville.');
    } else {
      setResult('✅ This city may allow short-term rentals. Double-check local laws.');
    }
  };

  return (
  <div style={{
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f9f9f9',
    padding: '2rem',
    minHeight: '100vh',
    textAlign: 'center',
  }}>
    <h1 style={{ color: '#2c3e50' }}>BNB Check</h1>
    <p style={{ fontSize: '1.2rem' }}>
      Curious if short-term rentals are allowed in your city? Let’s find out.
    </p>

    <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem' }}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city or zip"
        required
        style={{
          padding: '0.6rem',
          width: '280px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          marginBottom: '1rem',
        }}
      />
      <br />
      <button type="submit" style={{
        padding: '0.6rem 1.2rem',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#0070f3',
        color: 'white',
        cursor: 'pointer',
      }}>
        Check Rules
      </button>
    </form>

    {result && (
      <div style={{
        marginTop: '2rem',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: result.includes('❌') ? '#e74c3c' : '#2ecc71',
      }}>
        {result}
      </div>
    )}
  </div>
);
}