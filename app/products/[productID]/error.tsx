"use client";

// recovering from error using reset function, it rerendered the content from the main component to recover from error
// errors in nested routes pop up to the nearest parent error page
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      Error Boundary Page: {error.message}
      <button onClick={reset} className="bg-red-300 p-2 mx-4">
        {" "}
        Try Again
      </button>
    </>
  );
}
