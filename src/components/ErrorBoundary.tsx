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
        <div className="flex min-h-dvh flex-col justify-center bg-background px-6 py-12 text-foreground">
          <div className="mx-auto w-full max-w-lg">
            <p className="eyebrow">Volt</p>
            <h1 className="text-section mt-3">Konnte nicht geladen werden</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Bitte Seite neu laden. Wenn es bleibt, Fehlerdetails:
            </p>
            <pre className="volt-panel mt-5 overflow-x-auto rounded-md p-4 font-mono text-sm leading-relaxed text-muted-foreground">
              {this.state.error.message}
            </pre>
            <a
              href="/"
              className="mt-6 inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground"
            >
              Neu laden
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
