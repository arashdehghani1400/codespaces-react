import React, { Counter } from 'react';
const Counter = () => {
// State hook goes here
    const [count, setCount] = useState(0);
return (
// Component JSX goes here
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
  <h1 style={{ fontSize: '2em' }}>Count: {count}</h1>
  <button onClick={() => setCount(count + 1)}>Increment</button>
  <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrement</button>
  </div>
);
};
export default Counter;
  