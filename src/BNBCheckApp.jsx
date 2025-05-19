import React, { useState, useEffect } from 'react';
import rules from './rules.json';

export default function BNBCheckApp() {
  const [city, setCity] = useState('');
  const [result, setResult] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Load list of supported cities from rules
    setCities(Object.keys(rules));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const lookup = city.trim().toLowerCase();
    const rule = rules[lookup];

    if (rule) {
      setResult(rule);
    } else {
      setResult("⚠️ This city may allow STRs, but check local laws and HOA rules to be sure.");
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
      <h1 style={{ color: '#2c3e50' }}>BNB Check</h1>
      <p style={{ fontSize: '1.1rem' }}>
        Curious if short-term rentals are allowed in your city? Let’s find out.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          list="city-list"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Start typing a city..."
          required
          style={{ padding: '0.6rem', width: '80%', maxWidth: '400px' }}
        />
        <datalist id="city-list">
          {cities.map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>
        <br /><br />
        <button type="submit" style={{ padding: '0.6rem 1.2rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Check Rules
        </button>
      </form>

      {result && (
        <div style={{ marginTop: '1.5rem', fontWeight: 'bold', fontSize: '1.1rem', color: '#27ae60' }}>
          {result}
        </div>
      )}
    </div>
  );
}