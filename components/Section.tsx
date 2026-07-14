type SectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div" | "article" | "aside";
  id?: string;
};

export default function Section({
  children,
  className = "",
  as: Component = "section",
  id,
}: SectionProps) {
  return (
    <Component
      id={id}
      className={`py-16 md:py-24 lg:py-28 ${className}`}
    >
      {children}
    </Component>
  );
}