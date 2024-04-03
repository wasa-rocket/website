type Props = {
  children: React.ReactNode;
};

export function BentoContainer({ children }: Props) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-4 relative my-12">
      {children}
    </div>
  );
}

export function BentoContainerSub({ children }: Props) {
  return (
    <div className="w-full flex md:flex-col flex-row gap-4">{children}</div>
  );
}
