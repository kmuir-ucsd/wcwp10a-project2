import React, { useState } from 'react';

// Our hook
export default function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [locked, setLocked] = useState(false);

  if (!locked) {
    setLocked(true);
    setTimeout(() => {
        setDebouncedValue(value);
        setLocked(false);
    }, delay);
  }


  return debouncedValue;
}