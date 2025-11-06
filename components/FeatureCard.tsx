interface FeatureCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const FeatureCard = ({ title, desc, icon }: FeatureCardProps) => {
  const isOpenAI = title === "Powered by OpenAI";
  
  return (
    <article className="group rounded-2xl border border-border bg-white shadow-card hover:shadow-hover transition-all duration-300 p-6 hover:-translate-y-2">
      {!isOpenAI && (
        <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-100 transition-colors">
          {icon}
        </div>
      )}
      {isOpenAI && (
        <div className="mb-6 flex flex-col items-center">
          <div className="text-sm text-muted mb-2 font-medium">Powered by</div>
          <div className="relative w-full h-10 flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}
      <h3 className={`font-display ${isOpenAI ? 'text-center' : 'text-xl'} text-fg mb-3 font-semibold`}>{title}</h3>
      <p className="text-muted leading-relaxed">{desc}</p>
    </article>
  );
};
