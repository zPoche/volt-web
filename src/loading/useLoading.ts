import { useContext } from 'react';
import { LoadingContext } from './context';

export function useLoading() {
  const ctx = useContext(LoadingContext);
  if (!ctx) {
    throw new Error('useLoading muss innerhalb von LoadingProvider genutzt werden');
  }
  return ctx;
}
