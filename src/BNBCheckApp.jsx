import { useState } from 'react';

export default function BNBCheckApp() {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Checking rules for ${city}...`);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to BNB Check</h1>
      <p>Answer a few questions to check short-term rental rules in your area.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="city">What city is the property in?</label><br />
        <input
          type="text"
          id="city"
          name="city"
          placeholder="e.g., Austin, TX"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        /><br /><br />

        <button type="submit">Check Rules</button>
      </form>
    </div>
  );
}