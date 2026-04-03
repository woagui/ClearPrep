export default function SectionHeading({ badge, title, highlight, description }) {
  const parts = title.split(highlight || "|||");
  return (
    <div className="text-center mb-12">
      {badge && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
        {highlight ? (
          <>
            {parts[0]}
            <span className="gradient-text">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-xl mx-auto">{description}</p>
      )}
    </div>
  );
}
