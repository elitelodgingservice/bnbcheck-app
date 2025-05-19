import React, { useState, useEffect } from 'react';
import rules from './rules.json';
import zipcodes from './zipcodes.json';

export default function BNBCheckApp() {
  const [address, setAddress] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = address.trim();

    if (!input) {
      setError('Please enter a full address.');
      setResult('');
      return;
    }

    setLoading(true);
    setError('');
    setResult('');

    setTimeout(() => {
      const zipMatch = input.match(/\b\d{5}\b/);
      let rule = null;

      if (zipMatch) {
        const zip = zipMatch[0];
        const city = zipcodes[zip];
        if (city) {
          rule = rules[city.toLowerCase()];
        }
      }

      if (!rule) {
        const cityMatch = input.match(/\b[a-zA-Z\s]+\b/gi);
        if (cityMatch) {
          for (let part of cityMatch) {
            const lookup = part.trim().toLowerCase();
            if (rules[lookup]) {
              rule = rules[lookup];
              break;
            }
          }
        }
      }

      setLoading(false);
      if (rule) {
        setResult(rule);
      } else {
        setResult('⚠️ We couldn’t find rules for this location. Please check with your city or HOA.');
      }
    }, 1200);
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '1.5rem',
        maxWidth: '600px',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: '#2c3e50', fontSize: 'clamp(1.5rem, 5vw, 2.2rem)' }}>BNB Check</h1>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', marginBottom: '1.5rem' }}>
        Enter a full address to check short-term rental rules.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="123 Main St, Austin TX 78701"
          style={{
            padding: '0.75rem',
            width: '100%',
            fontSize: '1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: '1rem',
            padding: '0.8rem 1.2rem',
            backgroundColor: '#007bff',
            color: 'white',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Check Rules
        </button>
      </form>

      {error && (
        <div style={{ marginTop: '1rem', color: 'red', fontWeight: 'bold' }}>
          ⚠️ {error}
        </div>
      )}

      {loading && (
        <div style={{ marginTop: '1.5rem', fontSize: '1rem', color: '#888' }}>
          ⏳ Checking rules...
        </div>
      )}

      {result && !loading && (
        <div
          style={{
            marginTop: '1.5rem',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            color: '#27ae60',
            lineHeight: '1.4',
          }}
        >
          {result}
        </div>
      )}
    </div>
  );
}