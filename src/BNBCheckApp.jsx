import React, { useState, useEffect } from 'react';
import rules from './rules.json';

export default function BNBCheckApp() {
  const [city, setCity] = useState('');
  const [result, setResult] = useState('');
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCities(Object.keys(rules));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult('');
    const lookup = city.trim().toLowerCase();

    setTimeout(() => {
      const rule = rules[lookup];
      if (rule) {
        setResult(rule);
      } else {
        setResult("⚠️ This city may allow STRs, but check local laws and HOA rules to be sure.");
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
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ color: '#2c3e50', fontSize: '2rem', marginBottom: '1rem' }}>BNB Check</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        Curious if short-term rentals are allowed in your city? Let’s find out.
      </p>

      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <input
          list="city-list"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Start typing a city..."
          required
          style={{
            padding: '0.75rem',
            width: '100%',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            marginBottom: '1rem',
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