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
        padding: '1.5rem',
        maxWidth: '600px',
        margin: 'auto',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ color: '#2c3e50', fontSize: 'clamp(1.5rem, 5vw, 2.2rem)' }}>BNB Check</h1>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', marginBottom: '1.5rem' }}>
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
            borderRadius: '6px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />
        <datalist id="city-list">
          {cities.map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>

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
            maxWidth: '100%',
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
            fontSize: '0.95rem',
          }}
        >
          ⚠️ {error}
        </div>
      )}

      {loading && (
        <div
          style={{
            marginTop: '1.5rem',
            fontSize: '1rem',
            color: '#888',
          }}
        >
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