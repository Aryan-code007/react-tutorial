import { useState } from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Clicks: {count}
      </button>
    </div>
  );
}