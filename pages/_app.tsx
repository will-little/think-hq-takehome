import "src/theme/globals.css";
import { ErrorBoundary } from "react-error-boundary";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={() => <p>Error fallback</p>}
        onReset={() => {}}
      >
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
