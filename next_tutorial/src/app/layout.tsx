export const metadata = {
  title: "My App",
  description: "My Next.js Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightcoral", padding: "1rem" }}>
          <p>header</p>
        </header>
        {children}
        <footer style={{ backgroundColor: "lightgreen", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
