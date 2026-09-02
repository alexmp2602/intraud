type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="overflow-hidden border-b border-(--color-border) bg-(--color-surface) py-14 sm:py-16 lg:py-20">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="font-display max-w-5xl text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.9] tracking-tight text-balance uppercase">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-(--color-muted-foreground) sm:text-xl">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
