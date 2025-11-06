interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ href, children, variant = 'primary' }: ButtonProps) => {
  const isPrimary = variant === 'primary';
  
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center h-14 px-8 rounded-full transition-all duration-300 font-semibold text-base ${
        isPrimary
          ? 'bg-brand-500 text-white shadow-card hover:shadow-hover hover:bg-brand-600 hover:-translate-y-0.5'
          : 'border-2 border-border text-fg hover:bg-surface hover:border-brand-300 hover:-translate-y-0.5'
      }`}
    >
      {children}
      {isPrimary && (
        <svg className="ml-2.5 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      )}
      {!isPrimary && (
        <svg className="ml-2.5 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </a>
  );
};

