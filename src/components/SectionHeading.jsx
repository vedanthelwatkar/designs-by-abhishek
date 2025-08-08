export default function SectionHeading({ title = "Section", subtitle = "" }) {
    return (
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-foreground text-4xl md:text-5xl font-bodoni font-light">{title}</h2>
        {subtitle ? <p className="text-muted-foreground text-lg md:text-xl font-cormorant">{subtitle}</p> : null}
      </div>
    )
  }
  