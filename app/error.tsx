'use client'

export default function Error({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md mx-auto text-center px-4">
        <h2 className="font-display text-2xl font-semibold text-fg mb-4">
          Something went wrong!
        </h2>
        <p className="text-muted mb-6">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}



