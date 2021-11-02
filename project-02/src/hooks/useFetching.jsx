import { useState } from 'react';

const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};

export { useFetching };
