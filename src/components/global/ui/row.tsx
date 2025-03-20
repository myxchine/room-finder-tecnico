export default function Row({
  children,
  centered,
  row,
  justifybetween,
  small,
  padding,
}: Readonly<{
  children: React.ReactNode;
  centered?: boolean;
  row?: boolean;
  justifybetween?: boolean;
  small?: boolean;
  padding?: boolean;
}>) {
  return (
    <div
      className={`flex flex-col relative gap-8 md:gap-10 w-full mx-auto overflow-hidden lg:overflow-visible  ${
        centered ? "items-center text-center justify-center" : ""
      } ${small ? "max-w-xl p-8 md:p-8" : "max-w-[var(--site-width)] p-4 md:p-6"}
      ${padding ? "my-6 md:my-10" : ""}
      `}
    >
      {children}
    </div>
  );
}
