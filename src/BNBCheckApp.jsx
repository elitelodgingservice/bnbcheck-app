import React, { useState, useEffect } from 'react';
import rules from './rules.json';

export default function BNBCheckApp() {
  const [city, setCity] = useState('');
  const [result, setResult] = useState('');
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setCities(Object.keys(rules));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedCity = city.trim().toLowerCase();

    // Basic validation
    if (!trimmedCity) {
      setError('Please enter a city name.');
      setResult('');
      return;
    }

    setLoading(true);
    setResult('');
    setError('');

    setTimeout(() => {
      const rule = rules[trimmedCity];

      if (rule) {
        setResult(rule);
      } else {
        setResult('⚠️ This city may allow STRs, but check local laws and HOA rules to be sure.');
      }

      setLoading(false);
    }, 1200);
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '2rem',
        maxWidth: '500px',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: '#2c3e50', fontSize: '2rem' }}>BNB Check</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        Curious if short-term rentals are allowed in your city? Let’s find out.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          list="city-list"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Start typing a city..."
          style={{
            padding: '0.75rem',
            width: '100%',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />
        <datalist id="city-list">
          {cities.map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>
        <br />
        <button
          type="submit"
          style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Check Rules
        </button>
      </form>

      {error && (
        <div
          style={{
            marginTop: '1rem',
            color: 'red',
            fontWeight: 'bold',
          }}
        >
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
          }}
        >
          {result}
        </div>
      )}
    </div>
  );
}