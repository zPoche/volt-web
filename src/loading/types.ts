export type LoadingContextValue = {
  isLoading: boolean;
  label: string;
  showLoading: (label?: string) => void;
  hideLoading: () => void;
  withLoading: <T>(task: () => Promise<T> | T, label?: string) => Promise<T>;
};
