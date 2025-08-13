export default function SectionHeading({
  title = "Section",
  subtitle = "",
  mode = "dark",
}) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2
        className={`${
          mode == "light" ? "text-light" : "text-background"
        } text-4xl md:text-5xl font-dream`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`${
            mode == "light" ? "text-light" : "text-burnt"
          } text-lg md:text-xl font-cormorant`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
