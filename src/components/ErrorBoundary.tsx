import { Component, type ErrorInfo, type ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { error: Error | null };

/** Verhindert stillen White-Screen — zeigt den Fehler sichtbar. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Volt UI crash:', error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: '100vh',
            padding: '2rem',
            fontFamily: 'system-ui, sans-serif',
            background: '#0f172a',
            color: '#f1f5f9',
          }}
        >
          <h1 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
            Volt konnte nicht geladen werden
          </h1>
          <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
            Bitte Seite neu laden. Wenn es bleibt, Fehlerdetails:
          </p>
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              background: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '0.5rem',
              padding: '1rem',
              fontSize: '0.875rem',
            }}
          >
            {this.state.error.message}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
