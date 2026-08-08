export function SectionLabel({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      style={{
        fontSize: 12.5,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--color-accent-700)",
        fontWeight: 600,
        marginBottom: 12,
        textAlign: align,
      }}
    >
      {children}
    </div>
  );
}
