import "./globals.css";

export const metadata = {
  title: "Docs mini",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
