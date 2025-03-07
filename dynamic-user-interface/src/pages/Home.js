import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Home Page</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Home;