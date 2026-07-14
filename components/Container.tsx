type ContainerProps<T extends React.ElementType = "div"> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
};

export default function Container<T extends React.ElementType = "div">({
  as,
  children,
  className = "",
  ...rest
}: ContainerProps<T> & React.ComponentPropsWithoutRef<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={`mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8 ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}