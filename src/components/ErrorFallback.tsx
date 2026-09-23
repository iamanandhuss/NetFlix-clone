import type { FallbackProps } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">

      <h1 className="text-3xl font-bold">
        Something went wrong 😢
      </h1>

      <p className="mt-4 text-red-500">
        {error instanceof Error ? error.message : 'An unknown error occurred'}
      </p>

      <button
        onClick={resetErrorBoundary}
        className="mt-5 px-5 py-2 bg-red-600 rounded"
      >
        Try Again
      </button>

    </div>
  );
}

export default ErrorFallback;