import React, { useState } from 'react';

export default function BNBCheckApp() {
  const [city, setCity] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cityLower = city.toLowerCase();

    if (cityLower.includes('nashville')) {
      setResult('❌ STRs are heavily regulated in Nashville. You may need an owner-occupied permit.');
    } else if (cityLower.includes('austin')) {
      setResult('⚠️ Austin requires a license and has zone restrictions for STRs.');
    } else if (cityLower.includes('orlando')) {
      setResult('✅ STRs are allowed in designated zones in Orlando. Check HOA rules.');
    } else if (cityLower.includes('miami')) {
      setResult('❌ STRs are mostly banned in residential areas of Miami.');
    } else {
      setResult('⚠️ This city may allow STRs, but check local laws and HOA rules to be sure.');
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