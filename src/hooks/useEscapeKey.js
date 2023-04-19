import { useEffect } from 'react';

export default function useEscapeKey(callback) {
  useEffect(() => {
    function handleKeyUp(event) {
      if (event.key === 'Escape') {
        callback(event);
      }
    }
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [callback]);
}
