import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { BlitzOverlay } from '../components/BlitzLoader';
import { LoadingContext } from './context';

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [label, setLabel] = useState('Laden…');

  const showLoading = useCallback((nextLabel = 'Laden…') => {
    setLabel(nextLabel);
    setIsLoading(true);
  }, []);

  const hideLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const withLoading = useCallback(
    async <T,>(task: () => Promise<T> | T, nextLabel = 'Laden…') => {
      showLoading(nextLabel);
      try {
        return await task();
      } finally {
        hideLoading();
      }
    },
    [hideLoading, showLoading],
  );

  const value = useMemo(
    () => ({ isLoading, label, showLoading, hideLoading, withLoading }),
    [hideLoading, isLoading, label, showLoading, withLoading],
  );

  return (
    <LoadingContext.Provider value={value}>
      {children}
      <BlitzOverlay show={isLoading} label={label} fullscreen />
    </LoadingContext.Provider>
  );
}
