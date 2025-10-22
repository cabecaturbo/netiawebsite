export const LoadingSpinner = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg', className?: string }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-primary-500 ${sizeClasses[size]} ${className}`}></div>
  )
}

export const LoadingButton = ({ children, loading, ...props }: { children: React.ReactNode, loading?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button 
      {...props}
      disabled={loading || props.disabled}
      className={`relative ${props.className || ''}`}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-inherit">
          <LoadingSpinner size="sm" />
        </div>
      )}
      <span className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-200'}>
        {children}
      </span>
    </button>
  )
}

export const LoadingCard = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-surface rounded-lg p-6 space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        </div>
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  )
}


