```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const controller = new AbortController();

  useEffect(() => {
    const signal = controller.signal;
    fetch('https://api.example.com/data', { signal })
      .then(response => response.json())
      .then(data => {
        if (!signal.aborted) {
          setCount(data.count);
        }
      })
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      });
    return () => controller.abort();
  }, []);

  return (
    <div>Count: {count}</div>
  );
}

export default MyComponent;
```