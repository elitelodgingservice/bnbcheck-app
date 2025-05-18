export default function BNBCheckApp() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to BNB Check</h1>
      <p>Answer a few questions to check short-term rental rules in your area.</p>
      
      <form>
        <label htmlFor="city">What city is the property in?</label><br />
        <input type="text" id="city" name="city" placeholder="e.g., Austin, TX" /><br /><br />

        <button type="submit">Check Rules</button>
      </form>
    </div>
  );
}