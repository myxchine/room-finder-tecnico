export default function Section({
  children,
  full,
  grey,
  className,
}: Readonly<{
  children: React.ReactNode;
  full?: boolean;
  grey?: boolean;
  className?: string;
}>) {
  return (
    <div
      className={`flex flex-col gap-8 w-full  relative   ${
        full ? "" : " md:py-4 "
      }
       ${grey ? "bg-secondary pt-6 md:pt-12 mb-6" : "p-0"}  ${className}`}
    >
      {children}
    </div>
  );
}
